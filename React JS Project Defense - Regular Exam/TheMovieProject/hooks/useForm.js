import { useEffect, useState } from 'react';

export default function useForm(submitHandler, initialValues) {
  const [inputs, setInputs] = useState(initialValues);

  useEffect(() => {
    setInputs(initialValues);
  }, [initialValues]);

  const onChangeInput = (e) => {
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    submitHandler(inputs);
  };

  return {
    inputs,
    onChangeInput,
    submitForm,
  };
}

/*   const [errors, setErrors] = useState({});
const validateInputs = () => {
  let valid = true;
  let newErrors = {};

  if (inputs.username.trim().length <= 4) {
    newErrors.username = 'Username must be at least 4 characters!';
    valid = false;
  }

  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!emailPattern.test(inputs.email)) {
    newErrors.email = 'Invalid email address';
    valid = false;
  }

  if (inputs.password.length <= 4) {
    newErrors.password = 'Password must be at least 5 characters long';
    valid = false;
  }
  if (inputs.password !== inputs.repass) {
    newErrors.password ='Passwords do not match!';
    valid = false;
  }

  setErrors(newErrors);
  return valid;
};
if (validateInputs()) {
} else {
  return errors;
} */
