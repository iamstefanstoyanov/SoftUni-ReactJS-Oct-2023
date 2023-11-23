import { useEffect, useContext } from 'react';
import { logout } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext';
export default function Logout() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);
  useEffect(() => {
    logout()
      .then((res) => {
        if (res.status === 204) {
          logoutHandler();
          navigate('/');
        }
      })
      .catch((err) => {
        console.log('Registration error:', err);
      });
  }, []);
  return null;
}
