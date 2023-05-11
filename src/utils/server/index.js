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

    return result.data;
  }
}
