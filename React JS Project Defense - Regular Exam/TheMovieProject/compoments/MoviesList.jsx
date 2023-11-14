import { Link } from 'react-router-dom';

export default function MoviesList({
  id,
  title,
  relDate,
  description,
  image,
  vote,
}) {
  return (
    <div className='movies-list-wrap' key={id} id={id}>
      <div className='poster'>
        <img className='poster-small' src={image} alt='Poster not avaible' />
      </div>
      <div className='movie-info' >
        <p>
          <span>Title:</span> {title}
        </p>
        <p>
          <span>Release Date:</span> {relDate}
        </p>
        <p>
          <span>Description:</span> {description}
        </p>
        <p>
          <span>Average Vote:</span> <b>{Number(vote).toFixed(2)}</b> /10
        </p>
      </div>
      <div className='movie-list-btns'>
        <svg
          className='icon-add-to-watchlist'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z' />
        </svg>
        <Link to={`/moviedetails/${id}`}>
          <button className='card-btn' type='button'>
            <span>More details</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
