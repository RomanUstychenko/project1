import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { VerifyWrap, Title, VerifyButton, VerifyTextButton, ShowMessageWrap, ShowMessage } from "./RegisterVerify.styled"

import { resendVerificationEmail } from "redux/auth/auth-operation";
// import { getUser } from "redux/auth/auth-selector";
const RegisterVerify = () => {
 

  const dispatch = useDispatch();
  const { newUser, emailSent } = useSelector((state) => state.auth);
  console.log("newUser", newUser)
  const [showMessage, setShowMessage] = useState(false);
  
  const handleResendEmail = () => {
      if (newUser?.email) {
          dispatch(resendVerificationEmail(newUser.email));
      };
      setShowMessage(true);
  };
       
  useEffect(() => {
    if (emailSent && showMessage) {
      console.log("useeffect")
        // setShowMessage(true);
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 3000); // Приховати через 5 секунд

        return () => clearTimeout(timer); // Очищення таймера при розмонтаженні
    }
}, [emailSent, showMessage]);
console.log("showMessage", showMessage)
      return ( 
        <VerifyWrap> 
        <Title>
          Thank You fo register, go to you email to verify
        </Title>
        <VerifyButton 
         onClick={handleResendEmail}
         >
          <VerifyTextButton>Resend verify code</VerifyTextButton>
          
        </VerifyButton>

        {showMessage  && 
        <ShowMessageWrap>
        <ShowMessage>The letter has been resent!</ShowMessage>
        </ShowMessageWrap>}
        </VerifyWrap>
     
        )
};
export default RegisterVerify;