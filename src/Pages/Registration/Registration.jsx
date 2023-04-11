import { useState } from 'react';
import { nanoid } from "nanoid";
import { useDispatch, 
  // useSelector
 } from "react-redux";
import { register } from 'redux/auth/auth-operation';
import scss from "./Registration.module.scss"
import { Button } from 'components/Button/Button';


export default function Registration() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameId = nanoid();
    const emailId = nanoid();
    const passwordId = nanoid();

  const dispatch = useDispatch();
  // const isUserLogin = useSelector(isLogin);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
        case 'name':
            setName(value);
            break;
        case 'email':
            setEmail(value);
            break;
        case 'password':
            setPassword(value);
            break;
        default:
            setName('');
            setEmail('');
            setPassword('');
    };
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("reg")
    dispatch(register({ name: name, email: email, password: password }));    
};

// if (isUserLogin) {
//   return <Navigate to="/contacts" />
// ;}

  return (
    <div className={scss.registrationPage}>
       <h1>Registration Form</h1> 
       <form
       onSubmit={handleSubmit}>
       <div className={scss.registrationForm}>
            {<div className={scss.registrationFormLabel}> <label 
            htmlFor={nameId}
            >Login </label></div>}
            <input 
            className={scss.registrationFormInput}
            id={nameId} placeholder="Enter name" name="name" type="text" required onChange={handleChange} value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             />
        </div>
        <div className={scss.registrationForm}>
            {<div className={scss.registrationFormLabel}><label 
            htmlFor={emailId}
            >E-mail </label></div>}
            <input 
            className={scss.registrationFormInput}
            id={emailId} placeholder="Enter email" name="email" type="email" required onChange={handleChange} value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
             />
        </div>
        <div className={scss.registrationForm}>
            {<div className={scss.registrationFormLabel}><label 
            htmlFor={passwordId}
            >Password </label></div>}
            <input 
            className={scss.registrationFormInput}
            id={passwordId} placeholder="Enter password" name="password" type="password" required onChange={handleChange} value={password}
             />
        </div>
        <Button 
        text="Registration"
        type="button"
        />
       </form>
       
       </div>
  )
}
