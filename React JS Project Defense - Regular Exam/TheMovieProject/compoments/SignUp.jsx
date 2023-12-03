import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../context/authContext';
import useForm from '../hooks/useForm';

const formKeys = {
  username: 'username',
  email: 'email',
  password: 'password',
  repass: 'repass',
  url: 'imgUrl',
};

export default function SignUp() {
  const { registerHandler } = useContext(AuthContext);
  //TODO....find more elegant solution
  const initialValues = useMemo(
    () => ({
      [formKeys.username]: '',
      [formKeys.email]: '',
      [formKeys.password]: '',
      [formKeys.repass]: '',
      [formKeys.url]: '',
    }),
    []
  );
  const { inputs,errors, onChangeInput,validateInputs, submitForm } = useForm(
    registerHandler,
    initialValues
  );
  console.log(errors)
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
          <form onSubmit={submitForm}>
            <input
              type='text'
              placeholder='Username...'
              name={formKeys.username}
              onChange={onChangeInput}
              onBlur={validateInputs}
              value={inputs[formKeys.username]}
            />
            {errors?.username && (
                <span style={{ color: "red" }}>{errors.username}</span>
              )}
            <input
              type='email'
              placeholder='Email'
              name={formKeys.email}
              onChange={onChangeInput}
              onBlur={validateInputs}
              value={inputs[formKeys.email]}
            />
            {errors?.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            <input
              type='text'
              placeholder='Profile image URL'
              name={formKeys.url}
              onChange={onChangeInput}
              onBlur={validateInputs}
              value={inputs[formKeys.url]}
            />
            {errors?.imgUrl && (
                <span style={{ color: "red" }}>{errors.imgUrl}</span>
              )}
            <input
              type='password'
              placeholder='Password'
              name={formKeys.password}
              onChange={onChangeInput}
              onBlur={validateInputs}
              value={inputs[formKeys.password]}
            />
            {errors?.password && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
            <input
              type='password'
              placeholder='Confirm password'
              name={formKeys.repass}
              onChange={onChangeInput}
              onBlur={validateInputs}
              value={inputs[formKeys.repass]}
            />
            <input type='submit' className='btn-submit' value='SignUp' />
          </form>
        </div>
      </div>
    </div>
  );
}
