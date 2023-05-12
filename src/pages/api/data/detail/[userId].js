import AplicationData from '@/domain/data';
import Wrapper from '@/utils/helper/wrapper';

const dataDomain = new AplicationData();
const wrapper = new Wrapper();

export default async function detail(req, res){
  const payload = { ...req.query };

  const detailData = await dataDomain.detail(payload);
  if(detailData.err) return wrapper.responseError(res, detailData.err);

  return wrapper.response(res, 200, {
    message: 'register success',
    code: 201,
    data: detailData.data,
    success: true
  });
}
