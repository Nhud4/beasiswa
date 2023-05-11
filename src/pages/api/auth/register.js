import Auth from '@/domain/auth';
import Wrapper from '@/utils/helper/wrapper';

const authDomain = new Auth();
const wrapper = new Wrapper();

export default async function register(req, res){
  const payload = { ...req.body };

  const insert = await authDomain.register(payload);
  if(insert.err) return wrapper.responseError(res, insert.err);
  delete payload.password;

  return wrapper.respons(res, 200, {
    message: 'register success',
    code: 201,
    data: { ...payload },
    success: true
  });
}
