import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/auth-operation"
import { NavbarUserList, NavbarUserName, Welcome, UserName, Setting, NavbarUserSet,
  // NavbarMenuList, NavbarMenuListItem, 
  Link, ButtonLogout, TextButton } from "./NavbarUser.styled";
import { getUser } from "redux/auth/auth-selector";
import { Button } from "components/Button/Button";


export default function NavbarUser() {
const user = useSelector(getUser)

const dispatch = useDispatch();
const onLogout =() => {
    dispatch(logout())
}

// console.log(user)

const chekName = Boolean(user)
  return (
    <>
   
    {/* <NavbarUserList> */}
      {chekName ?
       <NavbarUserName >
         {/* <img src={user.avatarURL} alt="avatar" /> */}
        {/* <Welcome>Welcome,</Welcome>  */}
       <UserName>{user.name}</UserName>
       </NavbarUserName>
        : 
       <Welcome>Welcome, <UserName>User</UserName>
       </Welcome> }
       
       <NavbarUserSet>
       <Link 
               to={"/users"} 
               end><Setting/>
        </Link>
               {/* <Button 
        style={{
          position: 'relative',
          right: '0px',
          height: '25px',
          padding: '0px 0px',
          minWidth: '100px',
          fontSize: 15,
          color: '#010101'
        }}
    
      text="Logout"
      type="button"
      onClick={onLogout}
      /> */}
      <ButtonLogout
      type="button"
      onClick={onLogout}
      >
<TextButton>Logout</TextButton>
      </ButtonLogout>
       </NavbarUserSet>
        
    {/* </NavbarUserList> */}
    </>
  )
}
