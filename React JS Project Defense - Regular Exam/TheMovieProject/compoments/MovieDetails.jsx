import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
/*   const [movieComments, setMovieComments] = useState([]); */
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
/*   const url2 = `http://localhost:3030/jsonstore/comments/${id}`; */
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTIzYWEzYTRlOTRhYzhkYTQwMDk1Mzk2ZDQ3MDZkMiIsInN1YiI6IjY1MzhmYWQyZjQ5NWVlMDBmZjY2M2U4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IzQpk27slS-MSxretzQENo36fQajZg1E14HSlXkTVOM',
    },
  };
 /*  const options2 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }; */
  useEffect(() => {
    setIsLoading(true);

    fetch(url, options)
      .then((response) => response.json())
      .then(setMovieDetails)
      .catch((error) => console.log(error))

/*     fetch(url2, options2)
      .then((response) => response.json())
      .then((data) => {
        setMovieComments(data.comment);
      })
      .catch((error) => console.log(error)) */
      .finally(() => setIsLoading(false));
  }, [id]);
  return (
    <>
      <h1>Movie Details</h1>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <div className='movie-details-container' id={movieDetails.id}>
            <img
              className='movie-details-img'
              src={
                'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path
              }
              alt='Poster not avaible'
            />
            <div className='movie-details-info'>
              <p>
                <span>Title:</span> {movieDetails.title}
              </p>
              <p>
                <span>Genres:</span>{' '}
                {movieDetails.genres?.map((e) => e.name + ', ')}
              </p>
              <p>
                <span>Homepage:</span> {movieDetails.homepage}
              </p>
              <p>
                <span>Overview:</span> {movieDetails.overview}
              </p>
              <p className='prodCompanies'>
                <span>Production Companies:</span>{' '}
                {movieDetails.production_companies?.map((e) => (
                  <img
                    key={e.name}
                    src={`https://image.tmdb.org/t/p/w500${e.logo_path}`}
                    alt={e.name}
                  />
                ))}
              </p>
              <p>
                <span>Relese Date:</span> {movieDetails.release_date}
              </p>
              <p>
                <span>Vote Average:</span>{' '}
                <b>{Number(movieDetails.vote_average).toFixed(2)}</b> /10
              </p>
            </div>
            <div className='movie-details-btns'>
              <svg
                className='icon-add-to-watchlist'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z' />
              </svg>
            </div>
          </div>
          {/* <div className='movie-comments'>
            <h3>Comments</h3>
            {movieComments?.map((e) => (
              <p key={e._id}>{e}</p>
            ))}
          </div> */}
        </>
      )}
    </>
  );
}
