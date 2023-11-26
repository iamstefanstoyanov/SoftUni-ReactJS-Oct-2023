import { useEffect, useState } from 'react';

export default function useForm(submitHandler, initialValues) {
  const [inputs, setInputs] = useState(initialValues);
  useEffect(()=>{
    setInputs(initialValues);
  },[initialValues]);
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
/* const handleSubmit = (e) => {
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
        
      }; */
