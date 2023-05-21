import NavbarMenu from "components/Navbar/NavbarMenu/NavbarMenu"
import NavbarAuth from "components/Navbar/NavbarAuth/NavbarAuth"
import NavbarUser from "./NavbarUser/NavbarUser"
import LiveTitle from "components/Live/LiveTitle/LiveTitle"
import scss from "./Navbar.module.scss"
import UseAuth from "components/hooks/useAuth"
import UseLive from "components/hooks/useLive"

export default function Navbar() {
  const isUserLogin = UseAuth()
  const isUseLive = UseLive()
  return (
    <>
    {isUseLive ? <LiveTitle /> : 
    <nav className={scss.navbarMenu}>
        <div className={scss.navbarList}>
          {isUserLogin &&  <NavbarMenu /> }
          {/* {isUserLogin &&  !<NavbarLive />} */}
           {isUserLogin ? <NavbarUser /> : <NavbarAuth />}
           
        </div>
    
    </nav>
    }
    </>
  )
}