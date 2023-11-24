import { deleteFromWatchlist } from '../services/watchlistService';
import Card from './Card';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/authContext';
import { getCurrentUserWatchlist } from '../services/watchlistService';
export default function ProfileWatchlist() {
  const { userId } = useContext(AuthContext);
  const [currentUserWatchlist, setCurrentUserWatchlist] = useState({});
  useEffect(() => {
    getCurrentUserWatchlist(userId)
    .then((data) => {
      setCurrentUserWatchlist(data);
    });
  },[]);
  const removeFromWatchlist = (e, id) => {
    e.preventDefault();
    deleteFromWatchlist(id);
    setCurrentUserWatchlist(currentUserWatchlist.filter((m) => m._id !== id));
  };
  return (
    <>
      {!currentUserWatchlist.length == 0 ? (
        <>
          {currentUserWatchlist?.map((m) => (
            <Card
              key={m._id}
              id={m.id}
              title={m.original_title}
              relDate={m.release_date}
              image={'https://image.tmdb.org/t/p/w500/' + m.poster_path}
              vote={m.vote_average}
              user={'fb352199-bcbc-4e1d-a1dc-ed346a6fb49a'}
              remove={(e) => removeFromWatchlist(e, m._id)}
              isProfile='true'
            />
          ))}
        </>
      ) : (
        <div className='no-comments'>
          <p>You have no movies in your watchlist.</p>
        </div>
      )}
    </>
  );
}
