const options = {
    method: 'GET',
  };
  export const getUser = async (id) => {
    const url = `http://localhost:3030/jsonstore/users/${id}`;
  
    const data = await (await fetch(url, options)).json();
    return data
  };
  