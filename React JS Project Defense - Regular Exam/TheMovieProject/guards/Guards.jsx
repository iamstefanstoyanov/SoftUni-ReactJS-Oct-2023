import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/authContext';

export default function Guard(props) {

  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to='/login' />;
  }
  
  return <>{props.children}</>;
}
