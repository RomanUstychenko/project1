import {  getAllUser } from "redux/auth/auth-selector";
import {  useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userUpdate, allUsers } from "redux/auth/auth-operation";

export default function LivePage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allUsers( ) )
      }, [dispatch])
    const users = useSelector(getAllUser)

    const user = () => {
        users.map((us) => us.name)
        return;
    }
    console.log(users)
console.log(users.map((us) => us.name))
    const buttons = [
        {
          btn: users.name,
          link: users.map((us) => us.name),
        }
      
      ];

  return (
    <>
    <div>LivePage</div>
    {buttons.map(b => (
        // <Item key={btnId}>
          <button to={'/live/' + b.link} name={b.link}>
            {b.btn}
          </button>
          
        // </Item>
      ))}
      </>
  )
}
