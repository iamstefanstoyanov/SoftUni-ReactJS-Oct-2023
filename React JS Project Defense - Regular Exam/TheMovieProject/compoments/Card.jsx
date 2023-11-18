import { Link } from 'react-router-dom';
import { deleteFromWatchlist } from '../services/watchlistService';

export default function Card({ id, title, relDate, description, image, vote,user }) {
  const isUser = true;
  return (
    <div className='card' key={id}>
      <img src={image} alt='Not Poster Available' />
      <h5>{title}</h5>
      <p className='relDate'>
        <span>Release Date:</span> {relDate}
      </p>
      <p>
        <span>Average Vote:</span> <b>{Number(vote).toFixed(2)}</b> /10
      </p>
      {description ? (
        <p className='description'>
          <span>Description:</span> {description}
        </p>
      ) : null}
      <div className='card-btns'>
        <Link to={`/moviedetails/${id}`}>
          <button className='card-btn' type='button'>
            <span>More details</span>
          </button>
        </Link>
        {isUser ? (
          <button className='card-btn' type='button' onClick={(e)=>deleteFromWatchlist(id,user)}>
            <span>Remove</span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
