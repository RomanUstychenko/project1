// import items from "./items"
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom"
import { getUser } from "redux/auth/auth-selector";
import { useSelector } from "react-redux";



export default function LiveTitle() {
  const user = useSelector(getUser);
  console.log(user)
  const chekName = Boolean(user)
  const items = chekName ? [
   
    {id: nanoid(),
      to: `/live/${user._id}`,
      text: `${user.name}`,
  },
   
    ] : "";


  
  return (
    <ul >
      {chekName ? items.map(({id, to, text}) => {
            return (
                <li  key={id}>
                    <NavLink  to={to} end>{text}</NavLink>
                </li>
            )})
         : <></> }

        
    </ul>
  )
}