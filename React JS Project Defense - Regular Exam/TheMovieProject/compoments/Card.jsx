import { Link } from 'react-router-dom';

export default function Card({ id, title, relDate, description, image, vote }) {
  return (
    <div className='card' key={id}>
      <img src={image} alt='Not Poster Available' />
      <h5>{title}</h5>
      <p className='relDate'>Release Date: {relDate}</p>
      <p>
        <span>Average Vote:</span> <b>{Number(vote).toFixed(2)}</b> /10
      </p>
      {description ? (
        <p className='description'>Description: {description}</p>
      ) : null}
      <Link to={`/moviedetails/${id}`}>
        <button className='card-btn' type='button'>
          <span>More details</span>
        </button>
      </Link>
    </div>
  );
}
