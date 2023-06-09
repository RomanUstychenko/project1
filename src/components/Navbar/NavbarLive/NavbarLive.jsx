// import items from "./items"
import { nanoid } from "nanoid";
// import { NavLink } from "react-router-dom"
import { getUser } from "redux/auth/auth-selector";
import { useSelector } from "react-redux";
import { ToLiveLink, ToLiveLinkList } from "./NavbarLive.styled";



export default function NavbarLive() {
  const user = useSelector(getUser);
  console.log(user)
  const chekName = Boolean(user)
  const items = chekName ? [
   
    {id: nanoid(),
      to: `/live/${user._id}`,
      text: "Go to live page",
  },
   
    ] : "";


  
  return (
    <ToLiveLinkList>
      {chekName ? items.map(({id, to, text}) => {
            return (
                // <li  key={id}>
                    <ToLiveLink  
                    target="_blank"
                    rel="noreferrer noopener"
                    to={to}
                    end>
                      {text}
                     </ToLiveLink>
                // </li>
            )})
         : <></> }

        
    </ToLiveLinkList>
  )
}