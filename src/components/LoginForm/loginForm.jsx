import { nanoid } from "nanoid";
import useForm from 'components/hooks/useForm';
import PropTypes from "prop-types";
// import { Button } from "components/Button/Button";
import { FormLogin, LoginFormWrapper, LoginFormLabel, LoginFormList, TextButton } from "./LoginForm.styled";
import { LogRegInput } from "components/common/GeneralStyle/Input.styled";
import { ButtonLogReg } from 'components/common/GeneralStyle/LogRegButton.styled';

    const initialState = {
        email: "",
        password: "",
      };
    
    export default function LoginForm({onSubmit}) {

        const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
        const {email, password} = state;

        const emailId = nanoid();
        const passwordId = nanoid();


      return (
        
        <FormLogin 
        onSubmit={handleSubmit}
        >
<LoginFormWrapper>
       <LoginFormList>
              <LoginFormLabel
            htmlFor={emailId}> 
            Login 
            </LoginFormLabel>
            <LogRegInput 
            id={emailId} placeholder="Enter name" name="email" type="text" required onChange={handleChange} value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
             />
        </LoginFormList>

        <LoginFormList>
              <LoginFormLabel
            htmlFor={passwordId}>Password 
            </LoginFormLabel>
            <LogRegInput 
            id={passwordId} 
            placeholder="Enter password" 
            name="password" 
            type="password" 
            required onChange={handleChange}
            value={password}
             />
        </LoginFormList>
        
        </LoginFormWrapper>
        {/* <Button 
        style={{
          height: '35px',
        }}
        text="Login"
        type="submit"
        /> */}
        <ButtonLogReg
        type="submit"
        >
          <TextButton>
          Login
          </TextButton>
        </ButtonLogReg>
       </FormLogin>
       
      )
    };

    LoginForm.defaultProps = {
        onSubmit: () => {}
      }
      
      LoginForm.propTypes = {
        onSubmit: PropTypes.func,
      }
    