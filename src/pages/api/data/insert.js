import AplicationData from '@/domain/data';
import Wrapper from '@/utils/helper/wrapper';

const dataDomain = new AplicationData();
const wrapper = new Wrapper();

export default async function insert(req, res){
  const payload = { ...req.body };

  const insertData = await dataDomain.insert(payload);
  if(insertData.err)return wrapper.responseError(res, insertData.err);

  return wrapper.response(res, 200, {
    message: 'register success',
    code: 201,
    data: { ...payload },
    success: true
  });
}
