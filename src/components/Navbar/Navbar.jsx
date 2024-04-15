import NavbarAuth from "components/Navbar/NavbarAuth/NavbarAuth"
import NavbarSetting from "./NavbarSetting/NavbarSetting"
import { NavbarTitles, NavbarList } from "./Navbar.styled"
import UseAuth from "components/hooks/useAuth"
import UseLive from "components/hooks/useLive"
import LiveTitle from "components/Live/LiveTitle/LiveTitle"

export default function Navbar({navbarHide}) {


  const isUserLogin = UseAuth()
  const isUseLive = UseLive()
  return (
    <>
    {isUseLive ? <LiveTitle 
    className={navbarHide === true ? 'hide-show' : ''}
    /> : 
    <NavbarTitles >
        <NavbarList >
           {isUserLogin ? <NavbarSetting/> : <NavbarAuth />}
           
        </NavbarList>
    
    </NavbarTitles>
     }
    </>
  )
}