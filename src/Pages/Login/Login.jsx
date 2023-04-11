import { useDispatch } from "react-redux";
import { login } from 'redux/auth/auth-operation';
import scss from "./Login.module.scss"

import LoginForm from 'components/LoginForm/loginForm';

export default function Login () {
   
    const dispatch = useDispatch();
    const onLogin = (data) => {
      dispatch(login(data));
    }
  return (
    <div className={scss.LoginPage}>
      <h1>Sign in please <br /> in your phonebook</h1>
      <LoginForm onSubmit={onLogin}/>
    </div>
  )
};


