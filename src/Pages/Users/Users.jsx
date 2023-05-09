import {  useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { nanoid } from "nanoid";
import { getUser } from "redux/auth/auth-selector";
import { userUpdate } from "redux/auth/auth-operation";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function Users() {

    const user = useSelector(getUser)
    // const users = useSelector(getAllUser)
    console.log(user)
    const chekName = Boolean(user)

    const dispatch = useDispatch();
const [name, setName] = useState('');

const userNameID = nanoid();
console.log(name)

const handleChange = (e) => {
  const { name } = e.currentTarget;
  console.log(name)
        switch (name) {
          case 'name':
            setName ( e.currentTarget.value);
            break;
          default:
            break;
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // const duplicateUsers = user.find(user => user.name.toLocaleLowerCase() === name.toLocaleLowerCase());
      //       if (duplicateUsers) {
      //       Notify.failure(`${name} is already in use`)
      //       return
      // }
      // else {

            dispatch(userUpdate(
             {name}
              )
              )}
            // }
// const click = (e) => {
//   // e.preventDefault();
//   dispatch(allUsers( ) )
// }
  return (
    <>
    <div>{chekName ? <p>
    <img src={user.avatarURL} alt="avatar" />
    Welcome, <b>{user.name}</b></p> : <p>Welcome, <b>User</b></p> }</div>


<form 
        onClick={e => e.stopPropagation()}
        // className={scss.form}
        onSubmit={handleSubmit}
        
        >
          <>
        <div 
        // className={scss.formInput}
        >
          <label htmlFor={userNameID}>UserName</label>
          <input 
          // className={scss.formInputName}
          id={userNameID} 
          type="text" 
          name="name" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          defaultValue={user.name} 
          onChange={handleChange} />
        </div>
        
        <button 
        // onClick={values => handleSubmit(values)}
        // className={scss.formBtn}
        type="submit">Change</button>
         {/* <button 
        onClick={() => click()}
        
        >Userssss</button> */}
        </>
        </form>

    </>
  )
}
