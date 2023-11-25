import { useEffect, useState,useContext } from 'react';
import { deleteComment, getCurrentUserComments } from '../services/commentsService';
import Spinner from './Spinner';
import AuthContext from '../context/authContext';

export default function ProfileComments() {
  const [userComments, setUserComments] = useState({});
  const { userId } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getCurrentUserComments(userId)
      .then(setUserComments)
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);
  const deleteHandler = (e,id) => {
    deleteComment(id);
    setUserComments(userComments.filter((c) => c._id !== id));
  };
  return (
    <>
      {isLoading && <Spinner />}
      {!userComments.length == 0 ? (
        <>
          {userComments?.map((c) => (
            <li key={c._id}>
              <p className='comment-p'>
                <span>Movie title:</span> {c.title}
              </p>
              <hr />
              <p className='comment'>
                <span>Comment:</span> {c.comment}
              </p>
              <div className='edit-delete-comments-btns'>
                <button className='edit-comment'>Edit</button>
                <button
                  className='delete-comment'
                  id={c._id}
                  onClick={(e) => deleteHandler(e,c._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </>
      ) : (
        <div className='no-comments'>
          <p>You do not have any comments yet.</p>
        </div>
      )}
    </>
  );
}
