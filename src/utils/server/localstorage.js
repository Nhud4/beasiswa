export const saveToken = (result, expired) => {
  localStorage.setItem('accessToken', result);
  localStorage.setItem('expired', expired);
};
export const getToken = () => {
  const token = typeof window !== 'undefined' ? window.localStorage.getItem('accessToken'):false;
  const expat = typeof window !== 'undefined' ? window.localStorage.getItem('expired'):false;
  const expDate = new Date(expat);
  const date = new Date();
  if (expDate.getTime() < date.getTime()) {
    typeof window !== 'undefined' ? window.localStorage.clear():false;
    return false;
  }
  return token;
};
export const removeToken = () => localStorage.removeItem('accessToken');
