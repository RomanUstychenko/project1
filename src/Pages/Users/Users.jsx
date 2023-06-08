import {  useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { nanoid } from "nanoid";
import { getUser } from "redux/auth/auth-selector";
import { userUpdate } from "redux/auth/auth-operation";
// import { Navigate } from "react-router-dom"
import { GoBack } from "./Users.styled";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Formik } from 'formik';

export default function Users() {

    const user = useSelector(getUser)
    // const users = useSelector(getAllUser)
    console.log(user)
    const chekName = Boolean(user)

    const dispatch = useDispatch();
const [name, setName] = useState('');
// const [onAddFile, setOnAddFile] = useState(null);
// const [preview, setPreview] = useState('');

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

// const handleChangeAvatar = e => {
//   setOnAddFile(e.currentTarget.files[0]);
//   const reader = new FileReader();
//   reader.onload = function (e) {
//     setPreview(e.target.result);
//   };
//   reader.readAsDataURL(e.currentTarget.files[0]);
// }
const UploadFile = async fileSelect => {
  const imageURL = new FormData();
  imageURL.append('imageURL', fileSelect);
  dispatch(userUpdate(imageURL));
  // setchangePhoto(true);
};

const handleChangeUpload = e => {
  const fileSelect = e.target.files[0];
  console.log(fileSelect)
  UploadFile(fileSelect);
};

  return (
    <>
    <GoBack
    to={"/items"} 
    end
    >Close</GoBack>
    <div>{chekName ? <p>
    <img src={user.logoURL} alt="avatar" />
    Welcome, <b>{user.name}</b></p> : <p>Welcome, <b>User</b></p> }</div>


        <form 
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        >
        <div>
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
        type="submit">Change</button>
        </form>
        
        <form 
        encType="multipart/form-data" 
        method="post"
        onClick={e => e.stopPropagation()}
        // onSubmit={handleChangeUpload}
        >
          <input 
          
          id={userNameID} 
          type="file" 
          name="logo" 
          accept="image/png, image/jpeg, image/jpg, image/bmp"
          onChange={handleChangeUpload}
          // required
          // defaultValue={user.avatarURL} 
          // onChange={handleChangeAvatar} 
          />
      
{/*         
        <button 
        type="submit">Change Logo</button> */}
        </form>
    </>
  )
}
