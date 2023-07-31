import AplicationData from '@/domain/data';
import Wrapper from '@/utils/helper/wrapper';

const domain = new AplicationData();
const wrapper = new Wrapper();

export default async function algoritma(req, res){
  const getData = await domain.naiveBayes();
  if(getData.err) return wrapper.responseError(res, getData);

  return wrapper.response(res, 200, {
    success: true,
    message: 'success to get data',
    code: 200,
    data: getData,
  });
}
