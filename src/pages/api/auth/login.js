import { addDays, formatISO } from 'date-fns';
import Auth from '@/domain/auth';
import Wrapper from '@/utils/helper/wrapper';
import { generateToken } from '@/utils/authorization/bearer_auth';

const authDomain = new Auth();
const wrapper = new Wrapper();

export default async function login(req, res){
  const payload = { ...req.body };

  const result = await authDomain.login(payload);
  if(result.err) return wrapper.responseError(res, result.err);

  const payloadToken = {
    username: result.data.username,
    name: result.data.name,
    userType: result.data.userType
  };

  const data = {
    accessToken: generateToken(payloadToken, { expiresIn: '1d' }),
    expAccessToken: formatISO(addDays(new Date(), 1))
  };

  return wrapper.response(res, 201, {
    message: 'login success',
    code: 201,
    data: data,
    success: true
  });
}
