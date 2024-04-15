import {  getAllUser } from "redux/user/user-selector";
import { useSelector } from "react-redux";
import { Link, List, Img } from "./LiveTitle.styled";
import { useLocation } from 'react-router-dom'


export default function LiveTitle({className}) {
  const users = useSelector(getAllUser);
  const location = useLocation();
  const category = (location.pathname.split('/')[2])
  const user = users.find(user => user._id === category)
  // console.log(user)
  const chekName = Boolean(user)
   
  return (
    <List
    className={className}
     >
            {chekName ?
              <>
              <Img src={user.logoURL} alt="avatar" />
                    <Link  
                    // activeClassName={"qqqqqqq"}
                    key={user.id}
                    // to={`/live/${user._id}`} 
                    // activeClassName={null}
                    // end
                    >{`${user.name}`}</Link>
                </>  : <></> }
                <style jsx>{`
       
       .hide-show {
        display: none;
      } 
    `}</style>
    </List>
  )
}