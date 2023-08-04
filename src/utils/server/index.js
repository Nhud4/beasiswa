export default class Server{
  async login(username, password){
    const data = {
      username: username,
      password: password
    };
    const JSONdata = JSON.stringify(data);
    const endPoint = '/api/auth/login';
    const options ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result;
  }

  async listData(params){
    const endPoint = `/api/data/list?size=${params.size}&page=${params.page}&sort=nama_mahasiswa&order=${params.order}&search=${params.search}`;
    const options ={
      method: 'GET',
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result;
  }

  async inputData(data){
    const JSONdata = JSON.stringify(data);
    const endPoint = '/api/data/insert';
    const options ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result;
  }

  async detailData(params){
    const endPoint = `/api/data/detail/${params}`;
    const options ={
      method: 'GET'
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result.data;
  }
}
