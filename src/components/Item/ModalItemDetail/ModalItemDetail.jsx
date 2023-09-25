import { useState } from "react";
import { nanoid } from "nanoid";
import { FormWrapper, FormInputHidden, FormInputLabelImg, ButtonWrapper, ButtonDel, FormImgWrapper, Img, Saved, Deleted, FormInputListImg, ListSectionChange, FormInputSection, FormInputListSection, BtnChageSection, LabelSection, BtnArrow } from "./ModalItemDetail.styled";
import { Form, FormInputList, FormInputLabel, FormInput } from "components/common/Input.styled";
import {
  useSelector, 
  useDispatch } from 'react-redux';
import { imgSaved } from 'redux/items/items-selector';
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
import { getSections } from "redux/sections/sections-selector"
import { useEffect } from "react";

export default function ModalItemDetail ({
  //  itemsCategory, 
  itemName,
   price, 
   description, 
   _id,
   itemImg,
   section,
    closeModal,
  // el
}) {



  const imgSavedCheck = useSelector(imgSaved);
  const sections = useSelector(getSections);
  // console.log("imgSavedCheck", imgSavedCheck)
  
 




  //  const location = useLocation();
  // const category = location.pathname.split('/')[2];
  const dispatch = useDispatch();

  const [newItemName, setNewItemName] = useState(itemName);
  const [newPrice, setNewPrice] = useState(price);
  const [newDescription, setNewDescription] = useState(description);
  const [newItemImg, setNewItemImg] = useState(itemImg);
  const [newSection, setNewSection] = useState(section);
  const [newSectionName, setNewSectionName] = useState(false);

  const [saved, setSaved] = useState(false);
  const [deleted, setDeleted] = useState(false);
  // const [section, setSection] = useState(category)
// console.log(section)
console.log(saved)
// console.log(newSectionName)
  const itemImgID = nanoid();
  const itemNameID = nanoid();
  const itemPriceID = nanoid();
  const itemDescriptionID = nanoid();
  const itemSectionID = nanoid();
 
// console.log(itemName, price)

 async function handleChange  (e)  {
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
            case 'newSection':
              console.log(e.currentTarget.value)
              setNewSection ( e.currentTarget.value);
              setNewSectionName(false);
              // setNewSectionName ( e.currentTarget.value);
              console.log(newSection);
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
      };
      
      const handleChangeUpload = e => {
        const fileSelect = e.target.files[0];
        // console.log(fileSelect)
        UploadFile(fileSelect);
        // setSaved(imgSavedCheck);
        // console.log(saved);
        
      };
      // if (imgSavedCheck) {
      //   setSaved(true)
      // }
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
              section: newSection,
              
              } ));
                // dispatch(geItemsByCategory({category: category}))
                setNewItemName('');
              setNewDescription('');
              setNewPrice('');
              setNewItemImg('');
              setNewSection('');
              closeModal ();
              // setModalDetailActive(false);
          // }
      }; 

const deleteImage = () => {
  dispatch(itemUpdate(
    {_id,
      itemImg: '',}));
  setSaved(false)
  setDeleted(true);

}


const filt =  
  sections.filter(section => section._id === newSection)




async function  OpenSectionList () {
  console.log('open')
  setNewSectionName(true)
  // console.log('NewSectionName', newSectionName)
  CloseSectionList2()
}




   




// const ChooseSectionList = () => {
//   function handleKeyDown () {
//     console.log("clickkk");
//     setNewSectionName(false);
// };
// const list = document.getElementsByName("listNewSection")
// for (let i = 0; i < list.length; i++) {
 
//   list[i].onchange = handleKeyDown
// }
// console.log (list)
// // const list2 = Array.from(list)


// // const el = document.getElementById("formWrap")
// // if (el !== undefined || null) {
// //   console.log("el")
// //   el.addEventListener("click", handleKeyDown, false);
// // };


// // if(list !== undefined) {
// //   console.log("list", list)
// //   console.log("lists", list2)
// //   // list[0].addEventListener("click", handleChange, false);
// // };

  
  
// CloseSectionList2()
// }

// async function CloseSectionList () {

//   const el = await document.getElementsByName("listNewSection");
//   console.log('elList', el[0])
//   const elListId = el[0];

//   function handleKeyDown (e) {
//     console.log("clickkk");
//     const Check = e.composedPath().includes(elListId);
//     console.log(Check)
   
// if (Check === true) {
//   console.log('true')
//   // setNewSectionName(true)
//   if (elListId !== undefined || null) {
//   console.log("el")
//   elListId.addEventListener("click", handleChange, false);
// }}
    
//     else {
//       console.log('false')
//       setNewSectionName(false);}
    
// };
// const elForm = document.getElementById("formWrap")
// if (elForm !== undefined || null) {
//   console.log("el")
//   elForm.addEventListener("click", handleKeyDown, false);
// }
 
//   // const elListId = await document.getElementById("listNewSection")
//   // const elForm = document.getElementById("formWrap")
//   console.log('elListId', elListId)
//   // if (elListId !== undefined || null) {
//   //     console.log("el")
//   //     // elListId.addEventListener("click", handleChange, false);
//   //     elListId.addEventListener("click", (e) => {
//   //       console.log("clickkk");
//   //       const withinBoundaries = e.composedPath().includes(elListId);
//   //       console.log(withinBoundaries)
//   //       console.log(e.composed);
//   //       console.log(e.composedPath());
//   //     });
//     // } else
//     // {elForm.addEventListener("click", handleKeyDown, false)};

// // const elForm = document.getElementById("formWrap")
// // if (elForm !== undefined || null) {
// //   console.log("el")
// //   elForm.addEventListener("click", handleKeyDown, false);
// };

async function CloseSectionList2 (e) {

  const el = await document.getElementsByName("listNewSection");
  const el2 = await document.getElementsByName("listNewSectionBtn");
  // const el3 = await document.getElementsByName("newSectionLabel");
  // console.log('elList', el[0])
  // console.log('elList', el)
  const elListId = el[0];
  const elBtn = el2[0];
  
  const elForm = document.getElementById("formWrap")
  
  // console.log(elLabel)


  
  async function handleKeyDown (e) {
    // console.log("clickkk");
    const CheckBtn =  e.composedPath().includes(elBtn);
    const CheckList = e.composedPath().includes(elListId);
    const CheckForm = e.composedPath().includes(elForm);
    
    console.log(CheckBtn)
    console.log(CheckList)
    console.log(CheckForm)
   
    console.log('newSectionName' , newSectionName)

  //   if (CheckList === true) {
  // console.log('Listtrue')
  // elListId.addEventListener("onChange", console.log("onChange"))
  // // setNewSectionName(true)
  //   }
    if (CheckList === false && CheckBtn === false && CheckForm === true) {
      console.log('Formtrue')
      // setNewSectionName(false)
        }
//   setNewSectionName(true)
// //   if (elListId !== undefined || null) {
// //   console.log("el")
// //   elListId.addEventListener("click", handleChange, false);
// // }
// }
    
//     else {
      // console.log('false')
    //   if (CheckForm === true) {
    //     console.log('CheckForm', CheckForm)
    //   // setNewSectionName(false);
    // }
    // }
    // setNewSectionName(false);
};

// const elForm = document.getElementById("formWrap")
// if (elForm !== undefined || null) {
//   console.log("el")
//   elForm.addEventListener("click", handleKeyDown, false);
// }
 
  // const elListId = await document.getElementById("listNewSection")
  // const elForm = document.getElementById("formWrap")
  // console.log('elListId', elListId)
  // if (elListId !== undefined || null) {
  //     // console.log("elList")
  //     setNewSectionName(true)
  //     elListId.addEventListener("click", handleChange, false);
  //     // elListId.addEventListener("click", (e) => {
  //     //   console.log("clickkk");
  //     //   const withinBoundaries = e.composedPath().includes(elListId);
  //     //   console.log(withinBoundaries)
  //     //   console.log(e.composed);
  //     //   console.log(e.composedPath());
  //     // });
  //   } else
  //   {elForm.addEventListener("click", handleKeyDown, false)};

// if (elListId !== undefined || null) {
//   console.log("elList")
//   elListId.addEventListener("click", handleKeyDown);
// };

if (elForm !== undefined || null) {
  // console.log("elForm")
  elForm.addEventListener("click", handleKeyDown, false);
};
}

useEffect(() => {
  
  console.log(newSectionName)
  }, 
   [ newSectionName]);

      return ( 
        <FormWrapper
        
        onClick={e => e.stopPropagation()}
        >
          <FormImgWrapper>
              <Img
            src={itemImg || noimg} 
            alt="img" 
            loading='lazy'/>
          <form
          encType="multipart/form-data" 
          method="post"
          onClick={e => e.stopPropagation()}
          >
          <FormInputListImg >
         
          <FormInputHidden 
          id={itemImgID} 
          type="file" 
          name="image" 
          accept="image/png, image/jpeg, image/jpg, image/bmp"
          onChange={handleChangeUpload} />
          <ButtonWrapper>
          {!itemImg && <FormInputLabelImg htmlFor={itemImgID}>Add image</FormInputLabelImg>}
         {itemImg && <FormInputLabelImg htmlFor={itemImgID}>Change image</FormInputLabelImg>} 
         {itemImg &&
          <ButtonDel 
        style={{
          position: 'relative',
          right: '0px',
          height: '25px',
          padding: '0px 0px',
          width: '100px',
          paddingLeft: '5px',
          fontSize: 15,
          color: '#010101',
          backgroundColor: 'red',
        }}
      text="Delete image"
      type="button"
      onClick={ 
        () => deleteImage()}
      />
          }
          </ButtonWrapper>
        </FormInputListImg>
          </form>
            
           
          </FormImgWrapper>
          <div>
          {imgSavedCheck && <Saved>change saved!</Saved>}
          {deleted && <Deleted>image deleted!</Deleted>}
          </div>

          <Form 
          id="formWrap"
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
        

        <FormInputListSection >
         <p>Section</p>
          <FormInputSection 
          id={itemDescriptionID} 
          type="text" 
          name="newSection" 
          pattern="[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may "
          required 
          value={filt.map(fi => fi.category)}
        
          
          onChange={handleChange} />
          <BtnChageSection
         type="button"
         id="listNewSectionBtn"
         name="listNewSectionBtn"
         onClick={() => OpenSectionList()}>
          <BtnArrow/>
         </BtnChageSection>
{newSectionName &&  
<ListSectionChange
id="listNewSection"
name="listNewSection"
value={section._id}
onChange={handleChange}>
  
        {sections.map(section => 
        <LabelSection
        name="newSectionLabel"
        id={itemSectionID}
        >
 <FormInputHidden
// id={itemSectionID}
type="radio"
name="newSection"
value={section._id}
onChange={handleChange}

/> {section.category}</LabelSection>  )}

  </ListSectionChange>} 
        </FormInputListSection>

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
      />
        </Form>
        </FormWrapper>
        
        );

        

};

