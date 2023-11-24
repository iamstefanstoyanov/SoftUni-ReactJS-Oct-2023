const options = {
  method: 'GET',
};
export const getCurrentMovieComments = async (id) => {
  const url = `http://localhost:3030/data/comments?where=movieId%3D%22${id}%22`;

  const data = await (await fetch(url, options)).json();
  return Object.values(data);
};
export const getCurrentUserComments = async (userId) => {
  try {
    const url = `http://localhost:3030/data/comments?where=_ownerId%3D%22${userId}%22`;
    const data = await (await fetch(url)).json();
    return Object.values(data);
  } catch (error) {
    console.log(error);
  }
};
export const deleteComment = async (id) => {
  const token = localStorage.getItem('accessToken');

  const url = `http://localhost:3030/data/comments/${id}`;

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

export const addComment = async (username, inputs, title, id) => {
  const token = localStorage.getItem('accessToken');

  const url = `http://localhost:3030/data/comments`;
  const body = {
    username: username,
    comment: inputs.text,
    title: title,
    movieId: id,
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
