import { useState } from "react"

export default function useForm(submitHandler, initialValues) {
    const [inputs, setInputs] = useState(initialValues);

    const onChangeInput = (e) => {
        setInputs(state => ({
            ...state,
            [e.target.name]: e.target.value
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
    }
}