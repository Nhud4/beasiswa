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

  async listData(){
    const endPoint = '/api/data/list';
    const options ={
      method: 'GET'
    };

    const response = await fetch(endPoint, options);
    const result = await response.json();

    return result.data;
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
}
