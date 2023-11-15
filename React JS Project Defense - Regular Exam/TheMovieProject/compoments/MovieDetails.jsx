import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneMovie } from '../services/moviesService';
import { getCurrentMovieComments } from '../services/commentsService';

import Spinner from './Spinner';

export default function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieComments, setMovieComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getOneMovie(id)
      .then(setMovieDetails);
    getCurrentMovieComments(id)
      .then(setMovieComments)
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
              src={movieDetails.poster_path?`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`:null}
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
                    src={e.logo_path?`https://image.tmdb.org/t/p/w500${e.logo_path}`:null}
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
          {!movieComments.length==0?<div className='movie-comments-container'>
            <h4>Comments</h4>
            <ul className='comments'>
              {movieComments.map((c) => (
                <li key={c.id}>
                  <p className='comment-username'><span>User:</span> {c.username}</p>
                  <hr />
                  <p className='comment-comment'><span>Comment:</span> {c.comment}</p>
                </li>
              ))}
            </ul>
          </div> : <div className='no-comments'><h5>This movie has not been commented yet.</h5></div> }
          
        </>
      )}
    </>
  );
}
