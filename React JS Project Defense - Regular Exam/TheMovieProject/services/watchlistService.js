export const deleteFromWatchlist = async (movieId,userId) => {
    const url = `http://localhost:3030/jsonstore/users/${userId}/watchlist/${movieId}`;
  
    const data =await (await fetch(url, {method: 'DELETE'})).json();
    return data;
  };