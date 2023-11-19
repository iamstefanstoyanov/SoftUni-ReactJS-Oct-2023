import { useEffect, useState } from 'react';
import { getCurrentUserComments } from '../services/userService';
import { deleteComment } from '../services/commentsService';
import Spinner from './Spinner';

export default function ProfileComments() {
  const [userComments, setUserComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);
  
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getCurrentUserComments('fb352199-bcbc-4e1d-a1dc-ed346a6fb49a')
      .then((data)=>{
        setUserComments(data)
        setCommentsCount(data.length)
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    }, []);
    const deleteHandler = (id) => {
    deleteComment(id, 'fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
    setCommentsCount(c => c - 1)
    setUserComments(userComments.filter((c) => c.id !== id));
  };
  console.log(`commentsCount = ${commentsCount}`)

  return (
    <>
      {isLoading && <Spinner />}
      {userComments?.map((c) => (
        <li key={c.id}>
          <p className='comment-p'>
            <span>Movie title:</span> {c.movieTitle}
          </p>
          <hr />
          <p className='comment'>
            <span>Comment:</span> {c.comment}
          </p>
          <div className='edit-delete-comments-btns'>
            <button className='edit-comment'>Edit</button>
            <button
              className='delete-comment'
              id={c.id}
              onClick={(e) => deleteHandler(e.target.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </>
  );
}
