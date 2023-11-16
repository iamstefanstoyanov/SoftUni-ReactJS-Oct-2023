import { useEffect, useState } from 'react';
import { getUser } from '../services/userService';
import { deleteComment } from '../services/commentsService';
import Card from './Card';
import Spinner from './Spinner';

export default function Profile() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUser('fb352199-bcbc-4e1d-a1dc-ed346a6fb49a')
      .then(setUser)
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);
  const deleteCommentHandler = (id) => {
    deleteComment(id, 'fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
    setUser((state) => {
      state.comments = Object.values(user.comments).filter((c) => c.id !== id);
    });
  };

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className='profile-container'>
          <div className='main-profile-info'>
            <div className='profile-picture'>
              <img src={user.imgUrl} alt='No Picture' />
            </div>
            <div className='profile-info'>
              <p>
                <span>Username:</span> {user.username}
              </p>
              <p>
                <span>Movies in watchlist:</span> {user.watchlist?.length}
              </p>
              <p>
                <span>Comments:</span> {user.comments?.length}
              </p>
            </div>
          </div>
          <div className='profile-watchlist'>
            <h4>My watchlist</h4>
            <div className='profile-watchlist-cards'>
              {user.watchlist?.map((m) => (
                <Card
                  key={m.id}
                  id={m.id}
                  title={m.original_title}
                  relDate={m.release_date}
                  image={'https://image.tmdb.org/t/p/w500/' + m.poster_path}
                  vote={m.vote_average}
                />
              ))}
            </div>
          </div>
          <div className='movie-comments-container'>
            <h4>My comments</h4>
            <ul className='comments'>
              {user.comments &&
                Object.values(user.comments).map((c) => (
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
                        onClick={(e) => deleteCommentHandler(e.target.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
