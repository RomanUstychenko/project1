import { useState } from 'react';
import { nanoid } from "nanoid";
import { useDispatch, 
  useSelector
 } from "react-redux";
import { register } from 'redux/auth/auth-operation';
import { 
  RegForm,
  RegistrationPage,
  RegistrationFormLabel, 
  RegistrationFormList,
  RegistrationFormWrapper,
  TextButton,
 } from './Registration.styled';
 import { LogRegInput } from 'components/common/GeneralStyle/Input.styled';
import { ButtonLogReg } from 'components/common/GeneralStyle/LogRegButton.styled';
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
       
       <RegForm
       onSubmit={handleSubmit}>
        <RegistrationFormWrapper>
       <RegistrationFormList >
  
              <RegistrationFormLabel 
            htmlFor={nameId}
            >Login </RegistrationFormLabel>
          
            <LogRegInput 
            id={nameId} placeholder="Enter name" name="name" type="text" required onChange={handleChange} value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             />
        </RegistrationFormList>
        <RegistrationFormList >
            <RegistrationFormLabel 
            htmlFor={emailId}
            >E-mail </RegistrationFormLabel>
            <LogRegInput 
            id={emailId} placeholder="Enter email" name="email" type="email" required onChange={handleChange} value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
             />
        </RegistrationFormList>
        <RegistrationFormList >
            <RegistrationFormLabel 
            htmlFor={passwordId}
            >Password </RegistrationFormLabel>
            
            <LogRegInput 
            id={passwordId} placeholder="Enter password" name="password" type="password" required onChange={handleChange} value={password}
             />
        </RegistrationFormList>
        </RegistrationFormWrapper>
        {/* <Button 
         style={{
          height: '35px',
        }}
        text="Registration"
        type="submit"
        /> */}
        <ButtonLogReg
        type="submit"
        >
<TextButton>Registration</TextButton>
        </ButtonLogReg>
       </RegForm>
      

  
       
       </RegistrationPage>
  )
}
