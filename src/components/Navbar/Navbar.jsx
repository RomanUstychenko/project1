import { NavLink } from "react-router-dom"
import items from "./items"

export default function NavbarMenu() {
    return (
      <ul >
          {items.map(({id, to, text}) => {
              return (
                  <li  key={id}>
                      <NavLink to={to} end>{text}</NavLink>
                  </li>
              )})
          }
      </ul>
    )
  }