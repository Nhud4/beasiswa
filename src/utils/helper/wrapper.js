function respons(res, status, data){
  res.status(status).json(data);
  res.end();
}


export {
  respons
};
