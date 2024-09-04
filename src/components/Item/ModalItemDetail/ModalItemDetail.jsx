import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
// import Select from 'react-select';
// import { options, option, customStyles } from './SelectOption';
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
  // SelectUnitWeight,
  // OptionUnitWeight
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
  // const sections = useSelector(getAllSections);
  const allSections = useSelector(getAllSections);
  console.log('allSections', allSections);

  const dispatch = useDispatch();
  
  const defaultWeight = () => {
    if (weight) {
      return parseFloat(weight)
    }
    else return
  };

  

  const [newItemName, setNewItemName] = useState(itemName);
  const [newPrice, setNewPrice] = useState(price);
  const [newDescription, setNewDescription] = useState(description);
  const [newWeight, setNewWeight] = useState(defaultWeight());
  const [newSection, setNewSection] = useState(section);
  const [newSectionName, setNewSectionName] = useState(false);

  // const [unit, setUnit] = useState({ value: defaultWeightUnit(), label: defaultWeightUnit() });
  const unit = useSelector(getItemWeightUnit)
  const unitCheck = () => {
    if (!unit) {
      return 'g'
    }
    return unit
  }
  // const [unit, setUnit] = useState(defaultWeightUnit());
  
  const [deleted, setDeleted] = useState(false);
 

  const itemImgID = nanoid();
  const itemNameID = nanoid();
  const itemPriceID = nanoid();
  const itemWeightID = nanoid();
  const itemDescriptionID = nanoid();
  const itemSectionID = nanoid();

  const inputRef = useRef(null);
  const inputSectionRef = useRef(null);

  const activeSectionInput = () => {
    console.log("activeSectionInput")
    inputSectionRef.current.focus();
  }
  const items = useSelector(getItems);
  // const itemsCategory = useSelector(getItemsByCategory);
  console.log('items', items);
  // console.log("itemsCategory", itemsCategory)
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
        console.log('newWeight', newWeight);
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

  const UploadFile = async fileSelect => {
    const chekImg = Boolean(itemImg);
    console.log('chekImg', chekImg);
    const imageURL = new FormData();
    imageURL.append('imageURL', fileSelect);
    if (chekImg) {
      console.log('true');
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
  console.log('itemsNew', itemsNew);
  // console.log("itemsCategory", itemsCategory)
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
      console.log('sectionTarget === newSection');
      console.log("unit", unit)
      dispatch(
        itemUpdate({
          _id: _id,
          idSort: idSort,
          itemName: newItemName,
          description: newDescription,
          price: newPrice,
          weight: newWeight + unitCheck(),
          itemImg: itemImg,
          section: newSection,
        })
      );
    }
    if (section !== newSection) {
      console.log('sectionTarget !== newSection');

      const maxIdSort = getMaxIdSort(itemsNew);

      console.log('maxIdSort', maxIdSort);

      dispatch(
        itemUpdate({
          _id: _id,
          idSort: (maxIdSort + 1).toString(),
          itemName: newItemName,
          description: newDescription,
          price: newPrice,
          weight: newWeight + unitCheck(),
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
    // setModalDetailActive(false);
    // }
  };

  const deleteImage = () => {
    dispatch(itemUpdate({ _id: _id, itemImg: '' }));
    // console.log("itemImg", itemImg)
    dispatch(imgDelete(itemImgId));

    setDeleted(true);
  };

  // const handleUnitChange = (e) => {
  //   setUnit(e.target.value);
  //   inputRef.current.focus();
  // };

  // const handleChangeUnit = (option) => {
  //   console.log("option", option)
  //   setUnit(option);
  //   inputRef.current.focus();
  // };

  const filter = () => {
    const filterSection = allSections.filter(data => data._id === newSection);
    const filterResult = filterSection.map(fi => fi.category);

    return filterResult;
  };

  async function OpenSectionList() {
    setNewSectionName(true);
    CloseSectionList();
  }

  async function CloseSectionList(e) {
    const elForm = document.getElementById('formWrap');

    async function handleKeyDown(e) {
      const CheckForm = e.composedPath().includes(elForm);

      if (CheckForm === true) {
        setNewSectionName(false);
      }
    }

    if (elForm !== undefined || null) {
      elForm.addEventListener('click', handleKeyDown, false);
    }
  }


  console.log("unit", unit)

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
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
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

        {/* <Select
        value={unit}
        onChange={handleChangeUnit}
        options={options}
        styles={customStyles}
         placeholder=""
      /> */}
            {/* <SelectUnitWeight value={unit} onChange={handleUnitChange}>
              {option.map((value) => (
                <OptionUnitWeight value={value}>{value}</OptionUnitWeight>

              ))}
      </SelectUnitWeight> */}


      <WeightSelect
      data={weight}
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
              // disabled
              readOnly
              onChange={handleChange}
            />
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
      {newSectionName && (
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
      )}
    </FormWrapper>
  );
}