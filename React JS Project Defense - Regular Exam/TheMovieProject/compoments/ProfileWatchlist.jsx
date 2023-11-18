import { getCurrentUserWatchlist } from '../services/userService';
import { useEffect, useState } from 'react';

import Card from './Card';
import Spinner from './Spinner';

export default function ProfileWatchlist() {
  const [userWatchlist, setUserWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCurrentUserWatchlist('fb352199-bcbc-4e1d-a1dc-ed346a6fb49a')
      .then(setUserWatchlist)
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {userWatchlist?.map((m) => (
        <>
          <div className='user-profile-btns'>
            <Card
              key={m.id}
              id={m.id}
              title={m.original_title}
              relDate={m.release_date}
              image={'https://image.tmdb.org/t/p/w500/' + m.poster_path}
              vote={m.vote_average}
            />  
          </div>
        </>
      ))}
    </>
  );
}
