import { useState } from 'react';
import { nanoid } from "nanoid";
import { useDispatch, 
  useSelector
 } from "react-redux";
import { register } from 'redux/auth/auth-operation';
import { 
  Title,
  RegistrationPage,
  RegistrationFormLabel, 
  RegistrationFormLabelList,
  RegistrationForm,
  RegistrationFormInput,
  RegistrationFormWrapper } from './Registration.styled';
import { Button } from 'components/Button/Button';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { isRegister } from 'redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';
// import { Modal } from 'components/Modal/Modal';
// import ModalRegisterVerify from 'components/ModalRegisterVerify/ModalRegisterVerify';

export default function Registration() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [modalActive, setModalActive] = useState('');

  const nameId = nanoid();
    const emailId = nanoid();
    const passwordId = nanoid();

  const dispatch = useDispatch();
  const isUserRegister = useSelector(isRegister);

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
    // console.log("reg")
    dispatch(register({ name: name, email: email, password: password }));    
};

// const openModal = () => {
//   if (isUserRegister) {
  
//     //  return console.log("userRegister")
//       setModalActive(true)
//     ;}
//     else {
//       console.log("enter name")
//     }
// }
if (isUserRegister) {
  return <Navigate to="/register/verify" />
//  return console.log("userRegister")

  // setModalActive(true)
;}

  return (
    <RegistrationPage>
       <Title>Registration Form</Title> 
       <form
       onSubmit={handleSubmit}>
        <RegistrationFormWrapper>
       <RegistrationForm >
            {<RegistrationFormLabelList > <RegistrationFormLabel 
            htmlFor={nameId}
            >Login </RegistrationFormLabel>
            </RegistrationFormLabelList>}
            <RegistrationFormInput 
            id={nameId} placeholder="Enter name" name="name" type="text" required onChange={handleChange} value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             />
        </RegistrationForm>
        <RegistrationForm >
            {<RegistrationFormLabelList ><RegistrationFormLabel 
            htmlFor={emailId}
            >E-mail </RegistrationFormLabel></RegistrationFormLabelList>}
            <RegistrationFormInput 
            id={emailId} placeholder="Enter email" name="email" type="email" required onChange={handleChange} value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
             />
        </RegistrationForm>
        <RegistrationForm >
            {<RegistrationFormLabelList><RegistrationFormLabel 
            htmlFor={passwordId}
            >Password </RegistrationFormLabel>
            </RegistrationFormLabelList>}
            <RegistrationFormInput 
            id={passwordId} placeholder="Enter password" name="password" type="password" required onChange={handleChange} value={password}
             />
        </RegistrationForm>
        </RegistrationFormWrapper>
        <Button 
        text="Registration"
        type="button"
        />
       </form>
      

  
       
       </RegistrationPage>
  )
}
