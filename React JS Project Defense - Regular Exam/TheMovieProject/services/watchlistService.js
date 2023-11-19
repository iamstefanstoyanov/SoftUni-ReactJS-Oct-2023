export const deleteFromWatchlist = async (movieId, userId) => {
  const url = `http://localhost:3030/jsonstore/users/${userId}/watchlist/${movieId}`;

  const data = await (await fetch(url, { method: 'DELETE' })).json();
  return data;
};
export const addToWatchlist = async (data, userId) => {
  const url = `http://localhost:3030/jsonstore/users/${userId}/watchlist/`;

  const body = {
    id:data.id,
    original_title: data.original_title,
    poster_path: data.poster_path,
    release_date: data.release_date,
    vote_average: data.vote_average,
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  return result;
};
