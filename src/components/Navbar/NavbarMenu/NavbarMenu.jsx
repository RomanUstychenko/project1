import items from "./items"
// import { NavLink } from "react-router-dom"
// import scss from "./NavbarMenu.module.scss"
import { NavbarMenuList, NavbarMenuListItem, Link } from "./NavbarMenu.styled"

// const getClassName = ({isActive}) => {
//     return isActive ? `${scss.link} ${scss.active}` : `${scss.link}`;
// }

export default function NavbarMenu() {
  return (
    <NavbarMenuList >
        {items.map(({id, to, text}) => {
            return (
                <NavbarMenuListItem  key={id}>
                    <Link 
                     to={to} 
                     end>{text}
                     </Link>
                </NavbarMenuListItem>
            )})
        }
    </NavbarMenuList>
  )
}