import { useState } from "react";
import { nanoid } from "nanoid";
import { FormWrapper, FormInputHidden, FormInputLabelImg, FormImgWrapper, Img, Saved, Deleted } from "./ModalItemDetail.styled";
import { Form, FormInputList, FormInputLabel, FormInput } from "components/common/Input.styled";
import {
  // useSelector, 
  useDispatch } from 'react-redux';
// import { getFilteredItems } from 'redux/items/items-selector';
import { itemUpdate, imgUpdate
  // geItemsByCategory
 } from "redux/items/items-operation"; 
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// // import { Formik } from 'formik';
// import { useLocation,
//   //  useSearchParams
//    } from 'react-router-dom';
import noimg from 'img/noimg.jpg'
import { Button } from "components/Button/Button";

export default function ModalItemDetail ({
  //  itemsCategory, 
  itemName,
   price, 
   description, 
   _id,
   itemImg,
    closeModal}) {
  // const items = useSelector(getFilteredItems);
  // console.log("category", category)
  
 




  //  const location = useLocation();
  // const category = location.pathname.split('/')[2];
  const dispatch = useDispatch();

  const [newItemName, setNewItemName] = useState(itemName);
  const [newPrice, setNewPrice] = useState(price);
  const [newDescription, setNewDescription] = useState(description);
  const [newItemImg, setNewItemImg] = useState(itemImg);

  const [saved, setSaved] = useState(false);
  const [deleted, setDeleted] = useState(false);
  // const [section, setSection] = useState(category)
// console.log(section)

const itemImgID = nanoid();
  const itemNameID = nanoid();
  const itemPriceID = nanoid();
  const itemDescriptionID = nanoid();
 
console.log(itemName, price)

  const handleChange = (e) => {
        const { name } = e.currentTarget;
        switch (name) {
          case 'newItemName':
            setNewItemName ( e.currentTarget.value);
            break;
            case 'newPrice':
              setNewPrice ( e.currentTarget.value);
            break;
            case 'newDescription':
              setNewDescription ( e.currentTarget.value);
            break;
            case 'newItemImg':
              setNewItemImg ( e.currentTarget.value);
            break;
          default:
            break;
        }
      };

      const UploadFile = async fileSelect => {
        const imageURL = new FormData();
        imageURL.append('imageURL', fileSelect);
        dispatch(imgUpdate(
          {_id,
           imageURL}));
        // setchangePhoto(true);
      };
      
      const handleChangeUpload = e => {
        const fileSelect = e.target.files[0];
        // console.log(fileSelect)
        UploadFile(fileSelect);
        setSaved(true)
      };
      // console.log(newItemImg)
  const handleSubmit = (e) => {

        e.preventDefault()
        // const duplicateItems = itemsCategory.find(itemCategory => itemCategory.itemName.toLocaleLowerCase() === newItemName.toLocaleLowerCase());
      
       
          // if (duplicateItems) {
          //   Notify.failure(`${itemName} is already in items`)
          //   // alert (`${name} is already in contact`)
          //   return
          // }
          // if (description === "") {
          //   setSection (category)
          //   dispatch(addItems(
          //     {itemsName, price, section}
          //     ));
          //     setItemsName('');
          //   // setDescription('');
          //   setPrice('');
          //   setSection('');
          //   setModalActive(false);
          // }
          // else {
            // setSection (category)

            // console.log(_id)
            // console.log(itemsName)
            // console.log(dispatch(itemUpdate({_id, 
            //   itemName: itemsName}
            //  )))
            // setSection (category)
            if (newPrice === "") 
            {setNewPrice(price)}

            dispatch(itemUpdate(
              {_id, 
                itemName: newItemName,
              description: newDescription,
              price: newPrice,
              itemImg: newItemImg,
              // section,
              
              } ));
                // dispatch(geItemsByCategory({category: category}))
                setNewItemName('');
              setNewDescription('');
              setNewPrice('');
              setNewItemImg('');
              // setSection('');
              closeModal ();
              // setModalDetailActive(false);
          // }
      }; 
      // const initialValues = {
      //   name: '',
      //   description: '',
      //   phone: '',
      // };
const deleteImage = () => {
  setSaved(false);
  setDeleted(true);

}
      return ( 
        <FormWrapper>
          <FormImgWrapper>
          <form
          encType="multipart/form-data" 
          method="post"
          onClick={e => e.stopPropagation()}
          // onSubmit={handleSubmit}
          >
          <FormInputList >
          <FormInputLabelImg htmlFor={itemImgID}>Open image</FormInputLabelImg>
          <FormInputHidden 
          id={itemImgID} 
          type="file" 
          name="image" 
          accept="image/png, image/jpeg, image/jpg, image/bmp"
          onChange={handleChangeUpload} />
          {saved && <Saved>saved!</Saved>}
          {deleted && <Deleted>deleted!</Deleted>}
          <button
          type="button"
          onClick={() => deleteImage()}
          >
            Delete image
          </button>
        </FormInputList>
          </form>
            <Img
            src={itemImg || noimg} 
            alt="img" 
            loading='lazy'/>
          </FormImgWrapper>
          
          <Form 
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        >
          
        <FormInputList >
          <FormInputLabel htmlFor={itemNameID}>Name</FormInputLabel>
          <FormInput 
          id={itemNameID} 
          type="text" 
          name="newItemName" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may "
          required
          // value={itemsName} 
          defaultValue={itemName}
          onChange={handleChange} />
        </FormInputList>
        <FormInputList >
          <FormInputLabel htmlFor={itemPriceID}>Price</FormInputLabel>
          <FormInput 
          id={itemPriceID} 
          type="text" 
          name="newPrice" 
          pattern="[0-9]{1,10}"
          title="Name may "
          required
          // value={itemsName} 
          defaultValue={price}
          onChange={handleChange} />
        </FormInputList>
        <FormInputList >
          <FormInputLabel htmlFor={itemDescriptionID}>Description</FormInputLabel>
          <FormInput 
          id={itemDescriptionID} 
          type="text" 
          name="newDescription" 
          pattern="[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may "
          required
          // value={itemsName} 
          defaultValue={description}
          onChange={handleChange} />
        </FormInputList>

        <Button 
        style={{
          position: 'relative',
          right: '0px',
          height: '25px',
          padding: '0px 0px',
          minWidth: '100px',
          fontSize: 15,
          color: '#010101'
        }}
    
      text="Change Name"
      type="submit"
      // onClick={() => setModalSectionActive(true)}
      />

        {/* <FormBtn 
        // onClick={values => handleSubmit(values)}
        type="submit">Change Name</FormBtn> */}
        
        </Form>
        </FormWrapper>
        
        )
};