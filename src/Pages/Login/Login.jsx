import { useDispatch } from "react-redux";
import { login } from 'redux/auth/auth-operation';
import { LoginPage, Title } from "./Login.styled";

import LoginForm from 'components/LoginForm/loginForm';

export default function Login () {
   
    const dispatch = useDispatch();
    const onLogin = (data) => {
      dispatch(login(data));
    }
  return (
    <LoginPage>
      <Title>Sign in please <br /> in your Menu</Title>
      <LoginForm onSubmit={onLogin}/>
    </LoginPage>
  )
};


