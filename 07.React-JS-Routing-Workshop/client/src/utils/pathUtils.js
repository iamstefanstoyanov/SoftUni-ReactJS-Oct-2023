export const pathToUrl = (path, params) => {
  const url = Object.keys(params).reduce((res, param) => {
    return res.replace(`:${param}`, params[param]);
  }, path);
  return url;
};
