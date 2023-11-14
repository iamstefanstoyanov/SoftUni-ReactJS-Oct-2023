import { Link } from 'react-router-dom';

import Clock from './Clock';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='background'>
        <div className='background-image'></div>
      </div>
      <div className='navbar-main'>
        <div className='logo'>
          <img className='logo_png' src='./images/movie_logo.png' />
          <span className='logo-text'>The Movie Site</span>
        </div>
        <ul className='top-navbar-btns'>
          <li>
            <Link to='/'>
              <button className='nav-btn'>
                <span>Home</span>
                <i></i>
              </button>
            </Link>
          </li>
          <li>
            <Link to='search'>
              <button className='nav-btn'>
                <span>Search</span>
                <i></i>
              </button>
            </Link>
          </li>
          <li>
            <Link to='catalog'>
              <button className='nav-btn'>
                <span>Catalog</span>
                <i></i>
              </button>
            </Link>
          </li>
          <li>
            <Link to='nowplaying'>
              <button className='nav-btn'>
                <span>Now Playing</span>
                <i></i>
              </button>
            </Link>
          </li>
        </ul>
        <div className='user-btns'>
          <div className='user'>
            <Link to='/profile' className='profile'>
              Profile
            </Link>
            <Link to='logout' className='logout'>
              Logout
            </Link>
          </div>
          <div className='guest'>
            <Link to='login' className='login'>
              Log in
            </Link>
            <Link to='signup' className='sign-up'>
              Sign up
            </Link>
          </div>
          <Clock />
        </div>
      </div>
    </div>
  );
}
