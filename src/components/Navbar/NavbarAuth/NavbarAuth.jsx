import items from "./items"

import { NavbarAuthList, Link, NavbarAuthListItem } from "./NavbarAuth.styled"



export default function NavbarAuth() {
  return (
    <NavbarAuthList >
        {items.map(({id, to, text}) => {
            return (
                <NavbarAuthListItem  key={id}>
                    <Link  to={to} end>{text}</Link>
                </NavbarAuthListItem>
            )})
        }
    </NavbarAuthList>
  )
}