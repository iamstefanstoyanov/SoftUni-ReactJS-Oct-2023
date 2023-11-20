import * as request from '../lib/request';
const url = 'http://localhost:3030/users';
export const login = async (email, password) => {
  const result = await request.post(`${url}/login`, {
    email,
    password,
  });
  return result;
};
export const register =  (email, password) =>
  request.post(`${url}/register`, {
    email,
    password,
  });
