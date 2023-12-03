import { useEffect, useState } from 'react';

export default function useForm(submitHandler, initialValues) {
  const [inputs, setInputs] = useState(initialValues);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setInputs(initialValues);
  }, [initialValues]);

  const onChangeInput = (e) => {
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const validateInputs = (e) => {
    let currentError = {};
    const { name, value } = e.target;
    if (name === 'username') {
      if (value.trim().length <= 4) {
        currentError['username'] = 'Username must be at least 4 characters!';
      }
    }
    if (name === 'email') {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!emailPattern.test(value)) {
        currentError['email'] = 'Invalid email address!';
      }

    }
    if (name === 'imgUrl') {
      const urlPattern = /^https:\/\//;
      if (!urlPattern.test(value)) {
        currentError['imgUrl'] = 'Invalid profile image format!';
      }

    }
    if (name === 'password') {
      if (value.length <= 4) {
        currentError['password'] = 'Password must be at least 5 characters long';
      }

    }
    if (name === 'repass') {
      if(value!== currentError.password){
        currentError['repass'] = 'Passwords don\'t match!';
      }

    }
    setErrors(currentError);
  };

  const submitForm = (e) => {
    e.preventDefault();

    submitHandler(inputs);
  };
  return { inputs, errors, onChangeInput, validateInputs, submitForm };
}
