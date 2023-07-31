import AplicationData from '@/domain/data';
import Wrapper from '@/utils/helper/wrapper';

const dataDomain = new AplicationData();
const wrapper = new Wrapper();

export default async function list(req, res){
  const payload = { ...req.query };
  const list = await dataDomain.list(payload);
  if(list.err) return wrapper.responseError(res, list.err);

  return wrapper.response(res, 200, {
    success: true,
    message: 'register success',
    code: 201,
    data: list.data,
    meta: list.meta,
  });
}
