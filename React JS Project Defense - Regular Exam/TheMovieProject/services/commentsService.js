
const options = {
  method: 'GET',
};
export const getCurrentMovieComments = async (id) => {
  const url = `http://localhost:3030/jsonstore/comments/${id}`;

  const data = await (await fetch(url, options)).json();
  return Object.values(data);
};

export const deleteComment = async (postId,userId) => {
  const url = `http://localhost:3030/jsonstore/users/${userId}/comments/${postId}`;

  const data =await (await fetch(url, {method: 'DELETE'})).json();
  return data;
  
};