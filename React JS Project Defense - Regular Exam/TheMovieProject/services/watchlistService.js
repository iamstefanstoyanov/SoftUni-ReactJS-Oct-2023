export const deleteFromWatchlist = async (id) => {
  const token = localStorage.getItem('accessToken');

  const url = `http://localhost:3030/data/watchlists/${id}`;

  const data = await (
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'X-Authorization': token,
      },
    })
  ).json();
  return data;
};

export const addToWatchlist = async (data) => {
  const token = localStorage.getItem('accessToken');

  const url = `http://localhost:3030/data/watchlists`;
  const body = {
    id: data.id,
    title: data.title,
    poster_path: data.poster_path,
    release_date: data.release_date,
    vote_average: data.vote_average,
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': token,
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  return result;
};

export const getCurrentUserWatchlist = async (userId) => {
  try {
    const url = `http://localhost:3030/data/watchlists?where=_ownerId%3D%22${userId}%22`;
    const data = await (await fetch(url)).json();
    return Object.values(data);
  } catch (error) {
    console.log(error);
  }
};
