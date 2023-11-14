import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rePassword: '',
    email: '',
    url:''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (formData.password !== formData.rePassword) {
      console.log('Passwords do not match!');
      return;
    }
    if (formData.username.length <= 4) {
      console.log('Username must be at least 5 characters!');
      return;
    }
    if (!emailPattern.test(formData.email)) {
      console.log('Invalid Email!');
      return;
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    fetch('http://localhost:3030/jsonstore/users', requestOptions)
      .then((response) => {
        if (response.ok) {
          setFormData({
            username: '',
            password: '',
            rePassword: '',
            email: '',
            url:''

          });
          console.log('Registration successful');
        } else {
          console.error('Registration failed');
        }
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };

  return (
    <div className='signup-container'>
      <div className='signup'>
        <div className='signup-title'>
          <span>
            Already have an account?
            <Link to='/login'>Login</Link>
          </span>
        </div>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='username'
              placeholder='UserName'
              id='username'
              value={formData.username}
              onChange={handleChange}
            />

            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type='url'
              name='url'
              placeholder='Profile image URL'
              value={formData.url}
              onChange={handleChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              id='password'
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type='password'
              name='rePassword'
              placeholder='Confirm password'
              value={formData.rePassword}
              onChange={handleChange}
            />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
