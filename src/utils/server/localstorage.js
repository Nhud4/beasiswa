export const saveToken = (result, expired) => {
  localStorage.setItem('accessToken', result);
  localStorage.setItem('expired', expired);
};
export const getToken = () => {
  const token = localStorage.getItem('accessToken');
  const expat = localStorage.getItem('expired');
  const expDate = new Date(expat);
  const date = new Date();
  if (expDate.getTime() < date.getTime()) {
    localStorage.clear();
    return null;
  }
  return token;
};
export const removeToken = () => localStorage.removeItem('accessToken');
