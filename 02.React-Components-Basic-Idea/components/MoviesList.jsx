/* eslint-disable react/prop-types */
import Movie from '../components/Movie'
import Heading from './Heading';
export default function MoviesList(props) {
  return (
    <div className="movie-list">
        <Heading>Movie List</Heading>
      <ul>
        <li><Movie data={props.movies[0]}/></li>
        <li><Movie data={props.movies[1]}/></li>
        <li><Movie data={props.movies[2]}/></li>
      </ul>
    </div>
  );
}
