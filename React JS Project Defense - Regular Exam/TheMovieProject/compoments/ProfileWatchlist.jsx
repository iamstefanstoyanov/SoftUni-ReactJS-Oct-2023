import { getCurrentUserWatchlist } from '../services/userService';
import { useEffect, useState } from 'react';
import { deleteFromWatchlist } from '../services/watchlistService';
import Card from './Card';
import Spinner from './Spinner';

export default function ProfileWatchlist() {
  const [userWatchlist, setUserWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [watchlistCount, setwatchlistCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getCurrentUserWatchlist('fb352199-bcbc-4e1d-a1dc-ed346a6fb49a')
      .then((data) => {
        setUserWatchlist(data);
        setwatchlistCount(data.length);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);
  const removeFromWatchlist = (e, id) => {
    e.preventDefault();
    deleteFromWatchlist(id, 'fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
    setUserWatchlist(userWatchlist.filter((m) => m.id !== id));
    setwatchlistCount((c) => c - 1);
  };
  return (
    <>
      {isLoading && <Spinner />}
      {userWatchlist?.map((m) => (
        <Card
          key={m.id}
          id={m.id}
          title={m.original_title}
          relDate={m.release_date}
          image={'https://image.tmdb.org/t/p/w500/' + m.poster_path}
          vote={m.vote_average}
          user={'fb352199-bcbc-4e1d-a1dc-ed346a6fb49a'}
          remove={(e) => removeFromWatchlist(e, m.id)}
        />
      ))}
    </>
  );
}
