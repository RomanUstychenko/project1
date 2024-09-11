import { useState, useEffect, useRef, useCallback  } from 'react';
import { nanoid } from 'nanoid';
import {
  FormWrapper,
  FormInputHidden,
  FormInputLabelImg,
  ButtonDel,
  FormImgWrapper,
  Img,
  Saved,
  Deleted,
  ListSectionChange,
  FormInputListSection,
  FormInputListSectionName,
  InputListWrapper,
  BtnChageSection,
  LabelSection,
  BtnArrow,
  ChangeImage,
  AddImage,
  DeleteImage,
  FormImgAction,
  RenameButton,
  RenameButtonText,
} from './ModalItemDetail.styled';
import {
  Form,
  FormInputList,
  FormInputLabel,
  FormInput,
  PriceWeightWrapper,
  FormInputListPriceWeight,
  FormInputPriceWeight,
  FormInputDescription,
  FormInputSection,
} from 'components/common/GeneralStyle/Input.styled';
import { useSelector, useDispatch } from 'react-redux';
import { imgSaved } from 'redux/items/items-selector';
import {
  itemUpdate,
  imgUpdate,
  imgDelete,
  fetchItems,
} from 'redux/items/items-operation';
import noimg from 'img/noimg.jpg';
import {
  // getSections,
  getAllSections,
} from 'redux/sections/sections-selector';
import { getItems } from 'redux/items/items-selector';

import WeightSelect from 'components/common/WeightSelect/WeightSelect';
import { getItemWeightUnit } from 'redux/items/items-selector';
import { setItemWeightUnit } from 'redux/items/items-slice';

export default function ModalItemDetail({ _id, activeItem, closeModal }) {
  const [
    {
      itemName,
      price,
      weight,
      description,
      idSort,
      itemImg,
      itemImgId,
      section,
    },
  ] = activeItem;

  const imgSavedCheck = useSelector(imgSaved);
  // const sections = useSelector(getSections);
  const allSections = useSelector(getAllSections);
  
  const dispatch = useDispatch();
  
  const defaultWeight = () => {
    if (weight) {
      const num = parseFloat(weight)
      if (!isNaN(num) && /\d/.test(weight)) {
        return num; // Повертає тільки число
      }

    }
    else return ""
  };

    const [newItemName, setNewItemName] = useState(itemName);
  const [newPrice, setNewPrice] = useState(price);
  const [newDescription, setNewDescription] = useState(description);
  const [newWeight, setNewWeight] = useState(defaultWeight() || "");
  const [newSection, setNewSection] = useState(section);
  const [newSectionName, setNewSectionName] = useState(false);
  const [deleted, setDeleted] = useState(false);
 
  const unit = useSelector(getItemWeightUnit)
  
  const itemImgID = nanoid();
  const itemNameID = nanoid();
  const itemPriceID = nanoid();
  const itemWeightID = nanoid();
  const itemDescriptionID = nanoid();
  const itemSectionID = nanoid();

  const inputRef = useRef(null);
  const inputSectionRef = useRef(null);
  const formRef = useRef(null);

  const activeSectionInput = () => {
    inputSectionRef.current.focus();
  }
  const items = useSelector(getItems);
  
  async function handleChange(e) {
    const { name } = e.currentTarget;
    switch (name) {
      case 'newItemName':
        setNewItemName(e.currentTarget.value);
        break;
      case 'newPrice':
        setNewPrice(e.currentTarget.value);
        break;
      case 'newDescription':
        setNewDescription(e.currentTarget.value);
        break;
      case 'newWeight':
        setNewWeight(e.currentTarget.value);
        break;
      case 'newSection':
        setNewSection(e.currentTarget.value);
        setNewSectionName(false);
        activeSectionInput()
        break;
      default:
        break;
    }
  }

  const formatWeight = () => {
    if (!newWeight) {
      return '';
    } else if (!unit) {
      return `${newWeight}g`;
    } else {
      return `${newWeight}${unit}`;
    }
  };

  const UploadFile = async fileSelect => {
    const chekImg = Boolean(itemImg);
    const imageURL = new FormData();
    imageURL.append('imageURL', fileSelect);
    if (chekImg) {
      dispatch(imgDelete(itemImgId));
    }
    dispatch(imgUpdate({ _id, imageURL }));
  };

  const handleChangeUpload = e => {
    const fileSelect = e.target.files[0];
    UploadFile(fileSelect);
    setDeleted(false);
  };

  const itemsNew = items.filter(data => data.section === newSection);
  
  // Функція для отримання максимального значення idSort в масиві
  const getMaxIdSort = itemsNew => {
    return itemsNew.reduce((max, itemNew) => {
      return Math.max(max, parseInt(itemNew.idSort));
    }, 0);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (newPrice === '') {
      setNewPrice(price);
    }
    if (section === newSection) {
      dispatch(
        itemUpdate({
          _id: _id,
          idSort: idSort,
          itemName: newItemName,
          description: newDescription,
          price: newPrice,
          weight: formatWeight(),
          itemImg: itemImg,
          section: newSection,
        })
      );
    }
    if (section !== newSection) {
        const maxIdSort = getMaxIdSort(itemsNew);
      dispatch(
        itemUpdate({
          _id: _id,
          idSort: (maxIdSort + 1).toString(),
          itemName: newItemName,
          description: newDescription,
          price: newPrice,
          weight: formatWeight(),
          itemImg: itemImg,
          section: newSection,
        })
      );
    }
    dispatch(fetchItems());
    dispatch(setItemWeightUnit(''))
    setNewItemName('');
    setNewDescription('');
    setNewPrice('');
    setNewWeight('');
    setNewSection('');
    closeModal();
  };

  const deleteImage = () => {
    dispatch(itemUpdate({ _id: _id, itemImg: '' }));
    dispatch(imgDelete(itemImgId));
    setDeleted(true);
  };

  const filter = () => {
    const filterSection = allSections.filter(data => data._id === newSection);
    const filterResult = filterSection.map(fi => fi.category);

    return filterResult;
  };

  async function OpenSectionList() {
    setNewSectionName(true);
  }

  // async function CloseSectionList(e) {
  //   console.log("CloseSectionList")
  //   const elForm = document.getElementById('formWrap');
  //   // const elFormNewSection = await document.getElementById('listNewSection'); 
  //   async function handleKeyDown(e) {
  //     const CheckForm = e.composedPath().includes(elForm);
  //     // const CheckFormNewSection = e.composedPath().includes(elFormNewSection);
  //     // console.log("elFormNewSection", elFormNewSection)
  //   //   if (CheckFormNewSection === true) {
  //   //     console.log("CheckFormNewSection", CheckFormNewSection)
  //   //        return
  //   //     }
  //   // else 
  //    if (CheckForm === true) {
  //       setNewSectionName(false);
  //       // console.log("CheckFormNewSection", CheckFormNewSection)
  //     }
  //   }

  //   if (elForm !== undefined || null) {
  //     elForm.addEventListener('click', handleKeyDown, false);
  //   }
  // }


 // Функція для закриття списку при кліку поза ним
 const handleClickOutside = useCallback((e) => {
  console.log("handleClickOutside", e)
  // Перевірка: якщо клік поза межами formWrap
  const ulElement = formRef.current.querySelector('ul');

  if (ulElement && ulElement.contains(e.target)) {
    console.log("Clicked intside, closing list");
    // setNewSectionName(false);
    return
  }
  // Якщо клік на formWrap, але не на ul, закрити список
  console.log("Clicked on formWrap, closing list");
  setNewSectionName(false);
}, []);

// Додаємо слухач при відкритті списку
useEffect(() => {
  
  if (newSectionName) {
    console.log("if newSectionName")
    document.addEventListener('mousedown', console.log("click"));
    document.addEventListener('mousedown', handleClickOutside);
    // CloseSectionList();
  } 
  else {
    console.log("else newSectionName")
    document.removeEventListener('mousedown', handleClickOutside);
  }

  // Очищуємо слухач при демонтажі компонента
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [newSectionName, handleClickOutside]); // Викликаємо useEffect тільки тоді, коли змінюється newSectionName



  return (
    <FormWrapper onClick={e => e.stopPropagation()}>
      <FormImgWrapper>
        <Img src={itemImg || noimg} alt="img" loading="lazy" />
        <FormImgAction
          encType="multipart/form-data"
          method="post"
          onClick={e => e.stopPropagation()}
        >
          <FormInputHidden
            id={itemImgID}
            type="file"
            name="image"
            accept="image/png, image/jpeg, image/jpg, image/bmp"
            onChange={handleChangeUpload}
          />
          {!itemImg && (
            <FormInputLabelImg htmlFor={itemImgID}>
              <AddImage />
            </FormInputLabelImg>
          )}
          {itemImg && (
            <FormInputLabelImg htmlFor={itemImgID}>
              <ChangeImage />
            </FormInputLabelImg>
          )}
          {itemImg && (
            <ButtonDel type="button" onClick={() => deleteImage()}>
              <DeleteImage />
            </ButtonDel>
          )}
        </FormImgAction>
      </FormImgWrapper>
      <div>
        {imgSavedCheck && <Saved>change saved!</Saved>}
        {deleted && <Deleted>image deleted!</Deleted>}
      </div>

      <Form
        id="formWrap"
        // onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <FormInputList>
          <FormInputLabel htmlFor={itemNameID}>Name</FormInputLabel>
          <FormInput
            id={itemNameID}
            type="text"
            name="newItemName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may"
            required
            defaultValue={itemName}
            onChange={handleChange}
          />
        </FormInputList>
        <PriceWeightWrapper>
          <FormInputListPriceWeight>
            <FormInputLabel htmlFor={itemPriceID}>Price</FormInputLabel>
            <FormInputPriceWeight
              id={itemPriceID}
              type="text"
              name="newPrice"
              pattern="^[0-9]+(\.[0-9]{1,2})?$"
              title="price xxx.xx"
              required
              defaultValue={price}
              onChange={handleChange}
            />
          </FormInputListPriceWeight>
          <FormInputListPriceWeight>
            <FormInputLabel 
            ref={inputRef}
            htmlFor={itemWeightID}>Weight</FormInputLabel>
            <FormInputPriceWeight
              id={itemWeightID}
              type="text"
              name="newWeight"
              pattern="^[0-9]+(\.[0-9]{1,2})?$"
              title="weight xxxxx"
              defaultValue={defaultWeight()}
              onChange={handleChange}
            />
      <WeightSelect
      weight={weight}
      inputRef={inputRef}
      />
          </FormInputListPriceWeight>
        </PriceWeightWrapper>

        <FormInputList>
          <FormInputLabel htmlFor={itemDescriptionID}>
            Description
          </FormInputLabel>
          <FormInputDescription
            id={itemDescriptionID}
            type="text"
            name="newDescription"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may "
            defaultValue={description}
            onChange={handleChange}
          />
        </FormInputList>

        <FormInputListSection>
          <FormInputListSectionName>Section</FormInputListSectionName>

          <InputListWrapper>
            <FormInputSection
            ref={inputSectionRef}
              id={itemSectionID}
              type="text"
              name="newSection"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may "
              required
              value={filter()}
              readOnly
              onChange={handleChange}
            />

{newSectionName ? (
        <ListSectionChange
          id="listNewSection"
          name="listNewSection"
          value={section}
          onClick={(e) => e.stopPropagation()}
        >
          {allSections.map(section => (
            <LabelSection
              name="newSectionLabel"
              id={itemSectionID}
              key={section._id}
              
            >
              <FormInputHidden
                type="radio"
                name="newSection"
                value={section._id}
                onChange={handleChange}
              />{' '}
              {section.category}
            </LabelSection>
          ))}
        </ListSectionChange>
      ) : null}

            <BtnChageSection
              type="button"
              id="listNewSectionBtn"
              name="listNewSectionBtn"
              onClick={() => OpenSectionList()}
            >
              <BtnArrow />
            </BtnChageSection>
          </InputListWrapper>
        </FormInputListSection>
        <RenameButton type="submit">
          <RenameButtonText>Save Changes</RenameButtonText>
        </RenameButton>
      </Form>
      {/* {newSectionName && (
        <ListSectionChange
          id="listNewSection"
          name="listNewSection"
          value={section}
          // onChange={handleChange}
        >
          {allSections.map(section => (
            <LabelSection
              name="newSectionLabel"
              id={itemSectionID}
              key={section._id}
              
            >
              <FormInputHidden
                type="radio"
                name="newSection"
                value={section._id}
                onChange={handleChange}
                // onClick={activeSectionInput()}
              />{' '}
              {section.category}
            </LabelSection>
          ))}
        </ListSectionChange>
      )} */}
    </FormWrapper>
  );
}
