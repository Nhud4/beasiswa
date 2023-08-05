import AplicationData from '@/domain/data';
import Wrapper from '@/utils/helper/wrapper';

const dataDomain = new AplicationData();
const wrapper = new Wrapper();

export default async function deleteData(req, res){
  const payload = { ...req.query };

  const deleteOne = await dataDomain.dataDeleted(payload);
  if(deleteOne.err) return wrapper.responseError(res, deleteOne.err);

  return wrapper.response(res, 200, {
    message: 'register success',
    code: 201,
    data: deleteOne.data,
    success: true
  });
}
