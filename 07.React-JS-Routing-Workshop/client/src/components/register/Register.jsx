import { useContext } from "react";
import AuthContext from "../../../context/authContext";
import useForm from "../../../hooks/useForm";

const RegisterFormKeys = {
    email: 'email',
    password: 'password',
    ConfirmPassword: 'confirm-password'
}
export default function Register() {
    const { registerSubmitHandler } =useContext(AuthContext);
    const {values,onChange,onSubmit} = useForm(registerSubmitHandler,{
        [RegisterFormKeys.email]:'',
        [RegisterFormKeys.password]:'',
        [RegisterFormKeys.ConfirmPassword]:'',
    })
    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" onChange={onChange} value={values[RegisterFormKeys.email]}/>

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" onChange={onChange} value={values[RegisterFormKeys.password]}/>

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password"onChange={onChange} value={values[RegisterFormKeys.ConfirmPassword]}/>

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
