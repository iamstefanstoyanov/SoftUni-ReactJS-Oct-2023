import './App.css';
import MoviesList from '../components/MoviesList';
import movies from './assets/moviesDB';
import Timer from '../components/Timer';
import Counter from '../components/Counter';

function App() {
  return (
    <div>
      <h1>My First Dynamic React APP</h1>
      
      <Counter />

      <Timer />

      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
