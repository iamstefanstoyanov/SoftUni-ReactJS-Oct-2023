import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext';
import { logout } from '../services/authService';

export default function Logout() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);
  useEffect(() => {
    logout()
    logoutHandler();
    navigate('/');
  }, []);
  return null;
}
