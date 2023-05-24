import { Title, Btn } from "./ModalRegisterVerify.styled"


export default function ModalRegisterVerify ({onClick}) {
 

  // const handleSubmit = (e) => {
    
  //             setModalActive(false);
  //         }
       
    
      return ( 
        <> 
        <Title>
          Thank You fo register, go to you email to verify
        </Title>
        <Btn 
        type="submit">
          Resend verify code
        </Btn>
        </>
     
        )
};