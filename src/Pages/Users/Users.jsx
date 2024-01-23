import {  useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { nanoid } from "nanoid";
import { getUser } from "redux/auth/auth-selector";
import { userUpdate } from "redux/auth/auth-operation";
// import { Navigate } from "react-router-dom"
import {Buttons, TextButton, FormLogo, DataWrapper, DataLabel, DataInput, DataInputDescription, DataForm, GoBackWrap, GoBack, ImgWraper, Img,  FormInputHidden, LabelLogo } from "./Users.styled";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Formik } from 'formik';
// import { Button } from "components/Button/Button";

export default function Users() {

    const user = useSelector(getUser)
    // const users = useSelector(getAllUser)
    
    const chekName = Boolean(user)

    const dispatch = useDispatch();
const [updName, setName] = useState(user.name);
const [updPhone, setUpdPhone] = useState(user.pnone);
const [updDescription, setUpdDescription] = useState(user.description);
const [updAddress, setUpdAddress] = useState(user.address);

// const [onAddFile, setOnAddFile] = useState(null);
// const [preview, setPreview] = useState('');

const userNameID = nanoid();
const userPhoneID = nanoid();
const userDescriptionID = nanoid();
const userAddressID = nanoid();
const userPhotoID = nanoid();
console.log(updName)
console.log(updPhone)
console.log(user.phone)

const handleChange = (e) => {
  const { name } = e.currentTarget;
  console.log(name)
        switch (name) {
          case 'name':
            setName ( e.currentTarget.value);
          break;
          case 'phone':
            setUpdPhone ( e.currentTarget.value);
          break;
          case 'description':
            setUpdDescription ( e.currentTarget.value);
          break;
          case 'address':
            setUpdAddress ( e.currentTarget.value);
          break;
          default:
            break;
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
            dispatch(userUpdate(
             {name: updName, 
              phone: updPhone,
              address: updAddress,
              description: updDescription,
            }
            ))}
      

const UploadFile = async fileSelect => {
  const imageURL = new FormData();
  imageURL.append('imageURL', fileSelect);
  dispatch(userUpdate(imageURL));
};

const handleChangeUpload = e => {
  const fileSelect = e.target.files[0];
  console.log(fileSelect)
  UploadFile(fileSelect);
};

  return (
    <>
    <GoBackWrap>
    <GoBack
    to={"/items"} 
    end
    >Close setting</GoBack>
    </GoBackWrap>
    
    <ImgWraper>
    {chekName ? 
    <>
    
    <p> Welcome, <b>{user.name}</b></p>
    <Img src={user.logoURL} alt="avatar" />
    </>
    : <p>Welcome, <b>User</b></p> }
    </ImgWraper>

    <FormLogo 
        encType="multipart/form-data" 
        method="post"
        onClick={e => e.stopPropagation()}
        // onSubmit={handleChangeUpload}
        >
          <FormInputHidden 
          
          id={userPhotoID} 
          type="file" 
          name="logo" 
          accept="image/png, image/jpeg, image/jpg, image/bmp"
          onChange={handleChangeUpload}
          // required
          // defaultValue={user.avatarURL} 
          // onChange={handleChangeAvatar} 
          />
      <LabelLogo
      htmlFor={userPhotoID}>
        Change Logo
      </LabelLogo>
        </FormLogo>

        <DataForm 
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        >
          <DataWrapper>
          <DataLabel
          htmlFor={userNameID}>
            Name
          </DataLabel>   
          <DataInput 
          id={userNameID} 
          type="text" 
          name="name" 
          placeholder="name of the place"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          defaultValue={user.name} 
          onChange={handleChange} />
        </DataWrapper>
        <DataWrapper>
        <DataLabel
          htmlFor={userPhoneID}>
            Phone
          </DataLabel>
        <DataInput 
        id={userPhoneID} 
        type="text" 
        name="phone" 
        minLength="13"
        placeholder="+31234567890"
        pattern="\+?[0-9\s\-\(\)]+"
        defaultValue={user.phone} 
        onChange={handleChange} />
        </DataWrapper>
        <DataWrapper>
          <DataLabel
          htmlFor={userAddressID}>
            Address
          </DataLabel>
          <DataInput 
          id={userAddressID} 
          type="text" 
          name="address" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          defaultValue={user.address} 
          onChange={handleChange} />
      </DataWrapper>
      <DataWrapper>
          <DataLabel
          htmlFor={userDescriptionID}>
            Description
          </DataLabel>
          <DataInputDescription 
          id={userDescriptionID} 
          type="text" 
          name="description" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          defaultValue={user.description} 
          onChange={handleChange} />
      </DataWrapper>
      {/* <Button 
      style={{
        position: 'relative',
        right: '0px',
        height: '30px',
        padding: '0px 0px',
        width: '100%',
        fontSize: '30px',
        color: '#010101',
        marginTop: '15px',
      }}
  
    text="save changes"
    type="submit"
    /> */}
    <Buttons
    type="submit">
      <TextButton>save changes</TextButton>
    </Buttons>
    
    </DataForm>

    </>
  )
}
