import { useEffect, useState, useContext, useMemo } from 'react';
import {
  deleteComment,
  getCurrentUserComments,
} from '../services/commentsService';
import Spinner from './Spinner';
import AuthContext from '../context/authContext';
import { formatDate } from '../utils/dataUtils';
import { Link } from 'react-router-dom';
export default function ProfileComments() {
  const [userComments, setUserComments] = useState({});
  const { userId } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  let updatedComments = useMemo(() => {
    setUserComments(userComments);
  }, [userComments]);
  useEffect(() => {
    setIsLoading(true);
    getCurrentUserComments(userId)
      .then(setUserComments)
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [updatedComments]);
  const deleteHandler = (e, id) => {
    deleteComment(id);
    setUserComments(userComments.filter((c) => c._id !== id));
  };
  return (
    <>
      {isLoading && <Spinner />}
      {!userComments.length == 0 ? (
        <>
          {userComments?.map((c) => (
            <li key={c._id} id={c._id}>
              <p className='comment-p'>
                <span>Movie title:</span> {c.title}
              </p>
              <p className='comment-p'>
                <span>Created on:</span> {formatDate(c._createdOn)}
              </p>
              <hr />
              <p className='comment'>
                <span>Comment:</span> {c.comment}
              </p>
              <div className='edit-delete-comments-btns'>
                <Link to={`/editcomment/${c._id}`}>
                  <button className='edit-comment' type='button'>
                    <span>Edit</span>
                  </button>
                </Link>
                <button
                  className='delete-comment'
                  onClick={(e) => deleteHandler(e, c._id)}
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
