import items from "./items"
import { Home } from "./NavbarAuth.styled";
import { NavbarAuthList, Link, LinkHome, NavbarAuthListItem } from "./NavbarAuth.styled"



export default function NavbarAuth() {
  return (
    <>
    <LinkHome
    to={"/about"} 
    end>
      <Home/>
    </LinkHome>
    <NavbarAuthList >
        {items.map(({id, to, text}) => {
            return (
                <NavbarAuthListItem  key={id}>
                    <Link  to={to} end>{text}</Link>
                </NavbarAuthListItem>
            )})
        }
    </NavbarAuthList>
    </>
  )
}