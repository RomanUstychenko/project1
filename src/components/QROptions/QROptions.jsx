// import items from "./items"
import { nanoid } from "nanoid";
// import { NavLink } from "react-router-dom"
import { getUser } from "redux/auth/auth-selector";
import { useSelector } from "react-redux";
import { ToLiveLink, NavbarWrap, CreateQr } from "./QROptions.styled";



export default function QROptions({setModalQrActive}) {
  const user = useSelector(getUser);
  // console.log(user)
  const chekName = Boolean(user)
  const items = chekName ? [
   
    {id: nanoid(),
      to: `/live/${user._id}`,
      text: "Go to QR Menu",
  },
    ] : "";


  
  return (
     <NavbarWrap>
      {chekName ? items.map(({id, to, text}) => {
            return (
                // <ToLiveLinkList  key={id}>
                    <ToLiveLink 
                    key={id} 
                    target="_blank"
                    rel="noreferrer noopener"
                    to={to}
                    end>
                      {text}
                     </ToLiveLink>
                  // </ToLiveLinkList>
            )})
         : <></> }

      
      <CreateQr onClick={() => setModalQrActive(true)}
      >Create QR</CreateQr>
      </NavbarWrap>
    //  </>
  )
}