import NavbarMenu from "components/Navbar/NavbarMenu/NavbarMenu"
import NavbarAuth from "components/Navbar/NavbarAuth/NavbarAuth"
import NavbarUser from "./NavbarUser/NavbarUser"
import scss from "./Navbar.module.scss"
import UseAuth from "components/hooks/useAuth"

export default function Navbar() {
  const isUserLogin = UseAuth()
  return (
    <nav className={scss.navbarMenu}>
        <div className={scss.navbarList}>
          {isUserLogin &&  <NavbarMenu />}
           {isUserLogin ? <NavbarUser /> : <NavbarAuth />}
        </div>
    
    </nav>
  )
}