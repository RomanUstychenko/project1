import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
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
import { isRegister } from 'redux/auth/auth-selector';
import RegisterVerify from 'Pages/RegisterVerify/RegisterVerify';
export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  const dispatch = useDispatch();
  const isUserRegister = useSelector(isRegister);

  const handleChange = event => {
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
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name: name, email: email, password: password }));
  };

  return (
    <RegistrationPage>
      {!isUserRegister && (
        <RegForm onSubmit={handleSubmit}>
          <RegistrationFormWrapper>
            <RegistrationFormList>
              <RegistrationFormLabel htmlFor={nameId}>
                Login{' '}
              </RegistrationFormLabel>

              <LogRegInput
                id={nameId}
                placeholder="Enter name"
                name="name"
                type="text"
                required
                onChange={handleChange}
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              />
            </RegistrationFormList>
            <RegistrationFormList>
              <RegistrationFormLabel htmlFor={emailId}>
                E-mail{' '}
              </RegistrationFormLabel>
              <LogRegInput
                id={emailId}
                placeholder="Enter email"
                name="email"
                type="email"
                required
                onChange={handleChange}
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
            </RegistrationFormList>
            <RegistrationFormList>
              <RegistrationFormLabel htmlFor={passwordId}>
                Password{' '}
              </RegistrationFormLabel>

              <LogRegInput
                id={passwordId}
                placeholder="Enter password"
                name="password"
                type="password"
                required
                onChange={handleChange}
                value={password}
              />
            </RegistrationFormList>
          </RegistrationFormWrapper>

          <ButtonLogReg type="submit">
            <TextButton>Registration</TextButton>
          </ButtonLogReg>
        </RegForm>
      )}
      {isUserRegister && (
        <>
          <RegisterVerify />
        </>
      )}
    </RegistrationPage>
  );
}
