import Card from './Card';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

export default function NowPlaying() {
  const [movies, setMoives] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = 'https://api.themoviedb.org/3/movie/now_playing';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTIzYWEzYTRlOTRhYzhkYTQwMDk1Mzk2ZDQ3MDZkMiIsInN1YiI6IjY1MzhmYWQyZjQ5NWVlMDBmZjY2M2U4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IzQpk27slS-MSxretzQENo36fQajZg1E14HSlXkTVOM',
    },
  };
  useEffect(() => {
    setIsLoading(true);

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setMoives(Object.values(data.results.slice(0, 5)));
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

  }, []);
  return (
    <>
      <h1>Now Playing</h1>
      {isLoading && <Spinner />}

      <div className='top-rated'>
        {movies.map((movie) => (
          <Card id={movie.id}
            key={movie.id}
            title={movie.title}
            relDate={movie.release_date}
            description={movie.overview}
            image={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
            vote={movie.vote_average}

          />
        ))}
      </div>
    </>
  );
}
