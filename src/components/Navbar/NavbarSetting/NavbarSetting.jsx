import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/auth-operation"
import {  NavbarSettingName, NavbarSettingLogo, Welcome, UserName, Setting, NavbarSettingSet, 
  SettingLink, ButtonLogout, TextButton } from "./NavbarSetting.styled";
import { getUser } from "redux/auth/auth-selector";
import HideSetting from "components/hooks/hideSetting";


export default function NavbarSetting() {

const user = useSelector(getUser)
const dispatch = useDispatch();
// const Sett = HideSetting()
const {
  SettingActive, 
  // setSettingActive,
  hideSet,
} = HideSetting();

// console.log('HideSetting', SettingActive)


const onLogout =() => {
    dispatch(logout())
}

// function hideSet () {
//   setSettingActive(false)
// }
// console.log(user)

const chekName = Boolean(user)
  return (
    <>
   
    
      {chekName ?
       <NavbarSettingName >
         <NavbarSettingLogo src={user.logoURL} alt="avatar" />
        
       <UserName>{user.name}</UserName>
       </NavbarSettingName>
        : 
       <Welcome>Welcome, <UserName>User</UserName>
       </Welcome> }
      
       <NavbarSettingSet>

       {SettingActive && (
        <SettingLink 
        onClick={() => hideSet ()}
               to={"/users"} 
               end><Setting/>
        </SettingLink>

        )}      
      <ButtonLogout
      type="button"
      onClick={onLogout}
      >
<TextButton>Logout</TextButton>
      </ButtonLogout>
       </NavbarSettingSet>  
    </>
  )
}
