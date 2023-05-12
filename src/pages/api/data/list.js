import AplicationData from '@/domain/data';
import Wrapper from '@/utils/helper/wrapper';

const dataDomain = new AplicationData();
const wrapper = new Wrapper();

export default async function list(req, res){
  const list = await dataDomain.list();
  if(list.err) return wrapper.responseError(res, list.err);

  return wrapper.response(res, 200, {
    message: 'register success',
    code: 201,
    data: list.data,
    success: true
  });
}
