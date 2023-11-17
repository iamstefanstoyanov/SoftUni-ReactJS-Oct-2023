import { useEffect, useState } from 'react';
import { getUser } from '../services/userService';
import ProfileComments from './ProfileComments';
import ProfileWatchlist from './ProfileWatchlist';

import Spinner from './Spinner';

export default function Profile() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);
  const [watchlistCount, setwatchlistCount] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    getUser('fb352199-bcbc-4e1d-a1dc-ed346a6fb49a')
      .then((data)=>{
        setUser(data);
        setCommentsCount(Object.values(data.comments).length)
        setwatchlistCount(Object.values(data.watchlist).length)
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [commentsCount,watchlistCount]);

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
                <span>Movies in watchlist:</span> {watchlistCount}
              </p>
              <p>
                <span>Comments:</span> {commentsCount}
              </p>
            </div>
          </div>
          <div className='profile-watchlist'>
            <h4>My watchlist</h4>
            <div className='profile-watchlist-cards'>
              <ProfileWatchlist />
            </div>
          </div>
          <div className='movie-comments-container'>
            <h4>My comments</h4>
            <ul className='comments'>
              <ProfileComments />
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
