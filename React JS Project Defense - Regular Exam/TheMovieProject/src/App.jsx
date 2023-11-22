import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthContext from '../context/authContext';
import { login,register } from '../services/authService';

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
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();
  const loginHandler = async (inputs) => {
    const result = await login(inputs.email, inputs.password);
    if (result !== undefined) {
      setAuth(result);
      navigate('/');
    } else {
      navigate('/login');
    }
  };
  const registerHandler = async (inputs)=>{
    console.log(inputs)
    const result = await register(inputs.username,inputs.password,inputs.email,inputs.imgUrl);
    if (result !== undefined) {
      setAuth(result);
      navigate('/');
    } else {
      navigate('/signup');
    }
  }
  const data = {
    loginHandler,
    registerHandler,
    username: auth.username,
    email: auth.email,
    imgUrl: auth.imgUrl,
    isAuth: !!auth.username,
  };
  return (
    <>
      <AuthContext.Provider value={data}>
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
      </AuthContext.Provider>
    </>
  );
}

export default App;
