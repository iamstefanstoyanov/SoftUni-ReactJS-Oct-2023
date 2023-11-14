import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:3030/jsonstore/users', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        let users = Object.values(data);
        let user = users.find((u) => u.email === formData.email);
        let userPass = users.find((u) => u.password === formData.password);

        if (user && userPass) {
          console.log(`Logged in with ${user.email}`);
          setFormData({
            password: '',
            email: '',
          });
        } else {
          console.log(`Failed to login`);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='signup-container'>
      <div className='login-container'>
        <div className='signup-title'>
          <span>
            Don&#39;t have an account?
            <Link to='/signup'>Sign Up</Link>
          </span>
        </div>
        <div className='form'>
          <form action='/login' method='post'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
            />

            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
            />
            <button type='button' onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
