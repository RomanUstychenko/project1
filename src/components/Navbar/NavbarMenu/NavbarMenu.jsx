import items from "./items"
import { NavLink } from "react-router-dom"
import scss from "./NavbarMenu.module.scss"

const getClassName = ({isActive}) => {
    return isActive ? `${scss.link} ${scss.active}` : `${scss.link}`;
}

export default function NavbarMenu() {
  return (
    <ul className={scss.navbarMenuList}>
        {items.map(({id, to, text}) => {
            return (
                <li className={scss.navbarMenuListItem} key={id}>
                    <NavLink className={getClassName} to={to} end>{text}</NavLink>
                </li>
            )})
        }
    </ul>
  )
}