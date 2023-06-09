import { nanoid } from "nanoid";
import useForm from 'components/hooks/useForm';
import PropTypes from "prop-types";
import { Button } from "components/Button/Button";
import { LoginFormLabelList, LoginFormLabel, LoginFormList, LoginFormInput } from "./LoginForm.styled";

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
        <div>
        <form onSubmit={handleSubmit}>
       <LoginFormList>
            <LoginFormLabelList>
              <LoginFormLabel
            htmlFor={emailId}> Login </LoginFormLabel>
            </LoginFormLabelList> 
            <LoginFormInput 
            id={emailId} placeholder="Enter name" name="email" type="text" required onChange={handleChange} value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
             />
        </LoginFormList>
        <LoginFormList>
            <LoginFormLabelList >
              <LoginFormLabel
            htmlFor={passwordId}>Password </LoginFormLabel>
            </LoginFormLabelList>
            <LoginFormInput 
            id={passwordId} placeholder="Enter password" name="password" type="password" required onChange={handleChange} value={password}
             />
        </LoginFormList>
        <Button 
        text="Login"
        type="button"
        />
       </form>
       </div>
      )
    };

    LoginForm.defaultProps = {
        onSubmit: () => {}
      }
      
      LoginForm.propTypes = {
        onSubmit: PropTypes.func,
      }
    