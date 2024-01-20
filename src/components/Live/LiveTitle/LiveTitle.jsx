// import items from "./items"
import { nanoid } from "nanoid";
import {  getAllUser } from "redux/user/user-selector";
import { useSelector } from "react-redux";
import { Link, List, Img } from "./LiveTitle.styled";
import { useLocation } from 'react-router-dom'



export default function LiveTitle() {
  const users = useSelector(getAllUser);
  const location = useLocation();
  const category = (location.pathname.split('/')[2])
  const user = users.find(user => user._id === category)
  console.log(user)
  const chekName = Boolean(user)
  const items = chekName ? [
   
    {id: nanoid(),
      to: `/live/${user._id}`,
      text: `${user.name}`,
  },
   
    ] : "";


  
  return (
    <List >
      {chekName ? items.map(({id, to, text}) => {
      //  console.log({to})
      //  console.log({text})
            return (
              <>
              <Img src={user.logoURL} alt="avatar" />
                    <Link  
                    key={id}
                    to={to} 
                    end>{text}</Link>
                </>
            )})
         : <></> }

        
    </List>
  )
}