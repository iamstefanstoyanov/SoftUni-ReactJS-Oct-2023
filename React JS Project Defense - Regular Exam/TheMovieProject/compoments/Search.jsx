import { useState, useEffect } from 'react';
import MoviesList from './MoviesList';
import { Pagination } from '@mui/material';

import Spinner from './Spinner';

export default function Search() {
  const [input, setInput] = useState('');
  const [movies, setMoives] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&&page=${page}`;
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
        setMoives(Object.values(data.results));
        setTotalPages(data.total_pages);
        window.scrollTo(0, 0);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [url]);
  const handleSubmit = (value) => {
    setInput(value);
  };
  const handlePageChange = (e, p) => {
    setPage(p);
  };
  return (
    <>
      <h1>Search</h1>
      <div className='search-container'>
        <div className='search'>
          <input
            type='text'
            value={input}
            className='searchTerm'
            onChange={(e) => handleSubmit(e.target.value)}
            placeholder='Search for your favorite movie...'
          />
        </div>
        <div className='movies-list-container'>
          {isLoading && <Spinner />}

          {movies.map((movie) => (
            <MoviesList
              key={movie.id}
              id={movie.id}
              title={movie.title}
              relDate={movie.release_date}
              description={movie.overview}
              image={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
              vote={movie.vote_average}
            />
          ))}
        </div>
        {!movies.length == 0 && (
          <div>
            <Pagination
              onChange={handlePageChange}
              count={totalPages}
              variant='outlined'
              shape='rounded'
            />
          </div>
        )}
      </div>
    </>
  );
}
