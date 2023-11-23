import { createContext } from 'react';
import { useState } from 'react';
import { login, register } from '../services/authService';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();
  const loginHandler = async (inputs) => {
    const result = await login(inputs.email, inputs.password);
    if (result !== undefined) {
      localStorage.setItem('accessToken', result.accessToken);
      setAuth(result);
      navigate('/');
    } else {
      navigate('/login');
    }
  };
  const registerHandler = async (inputs) => {
    console.log(inputs);
    const result = await register(
      inputs.username,
      inputs.password,
      inputs.email,
      inputs.imgUrl
    );
    if (result !== undefined) {
      localStorage.setItem('accessToken', result.accessToken);
      setAuth(result);
      navigate('/');
    } else {
      navigate('/signup');
    }
  };
  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  };
  const data = {
    loginHandler,
    registerHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    imgUrl: auth.imgUrl,
    isAuth: !!auth.username,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
export default AuthContext;
