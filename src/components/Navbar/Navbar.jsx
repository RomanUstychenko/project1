import NavbarAuth from "components/Navbar/NavbarAuth/NavbarAuth"
import NavbarSetting from "./NavbarSetting/NavbarSetting"
import LiveTitle from "components/Live/LiveTitle/LiveTitle"
import { NavbarTitles, NavbarList } from "./Navbar.styled"
import UseAuth from "components/hooks/useAuth"
import UseLive from "components/hooks/useLive"

export default function Navbar() {


  const isUserLogin = UseAuth()
  const isUseLive = UseLive()
  return (
    <>
    {isUseLive ? <LiveTitle /> : 
    <NavbarTitles >
        <NavbarList >
           {isUserLogin ? <NavbarSetting/> : <NavbarAuth />}
           
        </NavbarList>
    
    </NavbarTitles>
    }
    </>
  )
}