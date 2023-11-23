export const getUser = async (id) => {
  try {
    const url = `http://localhost:3030/jsonstore/users/${id}`;

    const data = await (await fetch(url)).json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getCurrentUserWatchlist = async (id) => {
  try {
    const url = `http://localhost:3030/jsonstore/users/${id}/watchlist/`;

    const data = await (await fetch(url)).json();
    return Object.values(data);
  } catch (error) {
    console.log(error);
  }
};
export const getCurrentUserComments = async (id) => {
  try {
    const url = `http://localhost:3030/jsonstore/users/${id}/comments/`;
    const data = await (await fetch(url)).json();
    return Object.values(data);
  } catch (error) {
    console.log(error);
  }
};
