import { Routes, Route } from 'react-router-dom';
import Footer from '../compoments/Footer';
import Navbar from '../compoments/NavBar';
import Login from '../compoments/Login';
import SignUp from '../compoments/SignUp';
import Catalog from '../compoments/Catalog';
import HomePage from '../compoments/HomePage';
import NowPlaying from '../compoments/NowPlaying';
import Search from '../compoments/Search';
import Profile from '../compoments/Profile';
import MovieDetails from '../compoments/MovieDetails';
import NotFound from '../compoments/NotFound';
function App() {
  return (
    <>
      <Navbar />
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/search' element={<Search />} />
          <Route path='/nowplaying' element={<NowPlaying />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/moviedetails/:id' element={<MovieDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
