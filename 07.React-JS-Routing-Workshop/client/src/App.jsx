import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import AuthContext from '../context/authContext';
import * as authService from '../src/services/authService';
import Path from './paths';

import Header from './components/header/Header';
import Home from './components/home/Home';
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';
import GameDetails from './components/game-details/GameDetails';

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);
    setAuth(result);
    navigate(Path.Home);
  };

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);
    setAuth(result);
    navigate(Path.Home);
  };
  const values = {
    registerSubmitHandler,
    loginSubmitHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={values}>
      <div id='box'>
        <Header />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path='/games' element={<GameList />} />
          <Route path='/games/create' element={<GameCreate />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/games/:gameId' element={<GameDetails />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
