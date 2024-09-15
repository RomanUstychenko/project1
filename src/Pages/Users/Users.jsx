import { useSelector, useDispatch } from 'react-redux';
import { useState, useMemo, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getUser } from 'redux/auth/auth-selector';
import { userUpdate } from 'redux/auth/auth-operation';
import {
  Buttons,
  TextButton,
  FormLogo,
  DataWrapper,
  DataLabel,
  DataInput,
  DataInputDescription,
  DataForm,
  GoBackWrap,
  GoBack,
  ImgWraper,
  Welcome,
  Img,
  FormInputHidden,
  LabelLogo,
} from './Users.styled';
import HideSetting from 'components/hooks/hideSetting';

import { imgDelete } from 'redux/items/items-operation';

export default function Users() {
  const user = useSelector(getUser);

  const dispatch = useDispatch();
  const [updName, setName] = useState('');
  const [updPhone, setUpdPhone] = useState('');
  const [updDescription, setUpdDescription] = useState('');
  const [updAddress, setUpdAddress] = useState('');


  useEffect(() => {
    if (user) {
      setName(user.name);
      setUpdPhone(user.phone);
      setUpdDescription(user.description);
      setUpdAddress(user.address);
    }
  }, [user]);


  const userNameID = useMemo(() => nanoid(), []);
  const userPhoneID = useMemo(() => nanoid(), []);
  const userDescriptionID = useMemo(() => nanoid(), []);
  const userAddressID = useMemo(() => nanoid(), []);
  const userPhotoID = useMemo(() => nanoid(), []);

  const { showSetting } = HideSetting;

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setUpdPhone(value);
        break;
      case 'description':
        setUpdDescription(value);
        break;
      case 'address':
        setUpdAddress(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      userUpdate({
        name: updName,
        phone: updPhone,
        address: updAddress,
        description: updDescription,
      })
    );
  };

  const UploadFile = fileSelect => {
    const imageURL = new FormData();
    imageURL.append('imageURL', fileSelect);
    if (user.logoURL) {
      dispatch(imgDelete(user.logoURLId));
    }
    dispatch(userUpdate(imageURL));
  };

  const handleChangeUpload = e => {
    const fileSelect = e.target.files[0];

    UploadFile(fileSelect);
  };

  return (
    <>
      <GoBackWrap>
        <GoBack onClick={() => showSetting()} to={'/items'} end>
          Close setting
        </GoBack>
      </GoBackWrap>

      <ImgWraper>
        {user ? (
          <>
            <Welcome>
              {' '}
              Welcome, <b>{user.name}</b>
            </Welcome>
            <Img src={user.logoURL} alt="avatar" />
          </>
        ) : (
          <p>
            Welcome, <b>User</b>
          </p>
        )}
      </ImgWraper>

      <FormLogo
        encType="multipart/form-data"
        method="post"
        onClick={e => e.stopPropagation()}
      >
        <FormInputHidden
          id={userPhotoID}
          type="file"
          name="logo"
          accept="image/png, image/jpeg, image/jpg, image/bmp"
          onChange={handleChangeUpload}
        />
        <LabelLogo htmlFor={userPhotoID}>Change Logo</LabelLogo>
      </FormLogo>

      <DataForm onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
        <DataWrapper>
          <DataLabel htmlFor={userNameID}>Name:</DataLabel>
          <DataInput
            id={userNameID}
            type="text"
            name="name"
            placeholder="name of the place"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            defaultValue={user.name}
            onChange={handleChange}
          />
        </DataWrapper>
        <DataWrapper>
          <DataLabel htmlFor={userPhoneID}>Phone:</DataLabel>
          <DataInput
            id={userPhoneID}
            type="text"
            name="phone"
            minLength="13"
            placeholder="+31234567890"
            pattern="\+?[0-9\s\-\(\)]+"
            defaultValue={user.phone}
            onChange={handleChange}
          />
        </DataWrapper>
        <DataWrapper>
          <DataLabel htmlFor={userAddressID}>Address:</DataLabel>
          <DataInput
            id={userAddressID}
            type="text"
            name="address"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            defaultValue={user.address}
            onChange={handleChange}
          />
        </DataWrapper>
        <DataWrapper>
          <DataLabel htmlFor={userDescriptionID}>Description:</DataLabel>
          <DataInputDescription
            id={userDescriptionID}
            type="text"
            name="description"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            defaultValue={user.description}
            onChange={handleChange}
          />
        </DataWrapper>
        <Buttons type="submit">
          <TextButton>Save changes</TextButton>
        </Buttons>
      </DataForm>
    </>
  );
}
