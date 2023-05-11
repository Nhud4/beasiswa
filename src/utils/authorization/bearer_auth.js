import { verify, sign } from 'jsonwebtoken';
import { UnauthorizedError } from '../helper/error';
import Wrapper from '../helper/wrapper';

const privateKey = process.env.BEARER_AUTH_PRIVATE_KEY;
const wrapper = new Wrapper();

function isAuthenticated(req, res, next){
  const auth = req.headers.authorization;
  if(!auth){
    return wrapper.responseError(res, new UnauthorizedError('bearer auth is required'));
  }
  const [ ,token] = auth.split(' ');
  try{
    const decoded = verify(token, privateKey);
    req.user = decoded;
    next();
  }catch(err){
    return wrapper.responseError(res, new UnauthorizedError('bearer auth is error'));
  }
}

function generateToken(payload, option = {}){
  return sign(payload, privateKey, option);
}


export {
  isAuthenticated,
  generateToken
};
