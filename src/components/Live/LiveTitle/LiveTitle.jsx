// import items from "./items"
import { nanoid } from "nanoid";
import { getUser } from "redux/auth/auth-selector";
import { useSelector } from "react-redux";
import { Link, List } from "./LiveTitle.styled";



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
    <List >
      {chekName ? items.map(({id, to, text}) => {
            return (
                
                    <Link  to={to} end>{text}</Link>
                
            )})
         : <></> }

        
    </List>
  )
}