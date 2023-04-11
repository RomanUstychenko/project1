import { useDispatch, useSelector } from "react-redux"
import { logout, current } from "redux/auth/auth-operation"
import scss from "./NavbarUser.module.scss"
import { getUser } from "redux/auth/auth-selector";
import { Button } from "components/Button/Button";


export default function NavbarUser() {
const user = useSelector(getUser)

const dispatch = useDispatch();
const onLogout =() => {
    dispatch(logout())
}
const user2 = () => {
  dispatch(current())}

console.log(user2)

const chekName = Boolean(user)
  return (
    <div className={scss.navbarUser}>
      {chekName ? <p className={scss.navbarUserName}>Welcome, <b>{user.name}</b></p> : <p>Welcome, <b>User</b></p> }
        <Button 
        style={{
          position: 'absolute',
          right: '0px',
          height: '25px',
          padding: '0px 0px',
          minWidth: '100px',
          fontSize: 15,
          color: '#010101'
        }}
    
      text="Logout"
      type="button"
      onClick={onLogout}
      />
    </div>
  )
}
