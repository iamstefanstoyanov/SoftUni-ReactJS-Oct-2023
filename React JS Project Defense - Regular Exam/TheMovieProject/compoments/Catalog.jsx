import Card from './Card';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import Spinner from './Spinner';

export default function Catalog() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
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
        setMovies(Object.values(data.results));
        window.scrollTo(0, 0);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [url]);
    
  const handleChange = (e, p) => {
    setPage(p);
  };
  return (
    <>
      <h1>Catalog</h1>
       {isLoading && <Spinner />}
      {!isLoading && (
        <div className='catalog'>
          {movies.map((movie) => (
            <Card id={movie.id}
              key={movie.id}
              title={movie.title}
              relDate={movie.release_date}
              image={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
             vote={movie.vote_average}

            />
          ))}
          
        </div>
      )}
      <Pagination
          onChange={handleChange}
          count={500}
          variant='outlined'
          shape='rounded'
        />
    </>
  );
}
