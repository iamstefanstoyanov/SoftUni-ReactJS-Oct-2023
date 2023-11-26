export const getCurrentMovieComments = async (id) => {
  const url = `http://localhost:3030/data/comments?where=movieId%3D%22${id}%22`;
  try {
    const data = await (
      await fetch(url, {
        method: 'GET',
      })
    ).json();
    return Object.values(data);
  } catch (error) {
    console.log(error);
  }
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

  try {
    const data = await (
      await fetch(url, {
        method: 'DELETE',
        headers: {
          'X-Authorization': token,
        },
      })
    ).json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addComment = async (username, inputs, title, id) => {
  const token = localStorage.getItem('accessToken');
  const url = `http://localhost:3030/data/comments`;
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentComment = async (id) => {
  const url = `http://localhost:3030/data/comments/${id}`;
  try {
    const data = await (
      await fetch(url, {
        method: 'GET',
      })
    ).json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editComment = async (newComment) => {
  const token = localStorage.getItem('accessToken');
  const url = `http://localhost:3030/data/comments/${newComment._id}`;
  try {
    const body = {
      username: newComment.username,
      comment: newComment.comment,
      title: newComment.title,
      movieId: newComment.movieId,
    };
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': token,
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
