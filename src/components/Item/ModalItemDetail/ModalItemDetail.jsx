import { useState, useEffect, useRef, useCallback } from 'react';
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
import { getSections } from 'redux/sections/sections-selector';
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
  const sections = useSelector(getSections);

  const dispatch = useDispatch();

  const defaultWeight = () => {
    if (weight) {
      const num = parseFloat(weight);
      if (!isNaN(num) && /\d/.test(weight)) {
        return num; // Повертає тільки число
      }
    } else return '';
  };

  const [formData, setFormData] = useState({
    newItemName: itemName,
    newPrice: price,
    newDescription: description,
    newWeight: defaultWeight() || '',
    newSection: section,
  });
  const [newSectionName, setNewSectionName] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const unit = useSelector(getItemWeightUnit);

  const itemImgID = nanoid();
  const itemNameID = nanoid();
  const itemPriceID = nanoid();
  const itemWeightID = nanoid();
  const itemDescriptionID = nanoid();
  const itemSectionID = nanoid();

  const inputRef = useRef(null);
  const inputSectionRef = useRef(null);
  const formRef = useRef(null);

  const activeSectionInput = useCallback(() => {
    inputSectionRef.current.focus();
  }, []);

  const items = useSelector(getItems);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'newSection') {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
      setNewSectionName(false);
      activeSectionInput();
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const formatWeight = () => {
    return !formData.newWeight ? '' : `${formData.newWeight}${unit || 'g'}`;
  };

  const UploadFile = useCallback(
    fileSelect => {
      const imageURL = new FormData();
      imageURL.append('imageURL', fileSelect);

      if (itemImg) {
        console.log('delete image');
        dispatch(imgDelete(itemImgId));
      }
      console.log('update image');
      dispatch(imgUpdate({ _id, imageURL }));
    },
    [itemImg, itemImgId, dispatch, _id]
  );

  const handleChangeUpload = e => {
    const fileSelect = e.target.files[0];
    UploadFile(fileSelect);
    setDeleted(false);
  };

  const itemsNew = items.filter(data => data.section === formData.newSection);

  // Функція для отримання максимального значення idSort в масиві
  const getMaxIdSort = itemsNew => {
    return itemsNew.reduce((max, itemNew) => {
      return Math.max(max, parseInt(itemNew.idSort));
    }, 0);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formData.newPrice === '') {
      setFormData({
        newPrice: price,
      });
    }
    if (section === formData.newSection) {
      dispatch(
        itemUpdate({
          _id: _id,
          idSort: idSort,
          itemName: formData.newItemName,
          description: formData.newDescription,
          price: formData.newPrice,
          weight: formatWeight(),
          itemImg: itemImg,
          section: formData.newSection,
        })
      );
    }
    if (section !== formData.newSection) {
      const maxIdSort = getMaxIdSort(itemsNew);
      dispatch(
        itemUpdate({
          _id: _id,
          idSort: (maxIdSort + 1).toString(),
          itemName: formData.newItemName,
          description: formData.newDescription,
          price: formData.newPrice,
          weight: formatWeight(),
          itemImg: itemImg,
          section: formData.newSection,
        })
      );
    }
    dispatch(fetchItems());
    dispatch(setItemWeightUnit(''));
    setFormData({
      newItemName: '',
      newPrice: '',
      newDescription: '',
      newWeight: '',
      newSection: '',
    });
    closeModal();
  };

  const deleteImage = () => {
    dispatch(itemUpdate({ _id: _id, itemImg: '' }));
    dispatch(imgDelete(itemImgId));
    setDeleted(true);
  };

  const filter = () => {
    const filterSection = sections.filter(
      data => data._id === formData.newSection
    );
    const filterResult = filterSection.map(data => data.category);

    return filterResult;
  };

  async function OpenSectionList() {
    setNewSectionName(true);
  }

  // Функція для закриття списку при кліку поза ним
  const handleClickOutside = useCallback(e => {
    // Перевірка: якщо клік поза межами formWrap
    const ulElement = formRef.current.querySelector('ul');

    if (ulElement && ulElement.contains(e.target)) {
      return;
    }
    setNewSectionName(false);
  }, []);

  // Додаємо слухач при відкритті списку
  useEffect(() => {
    if (newSectionName) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
       return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [newSectionName, handleClickOutside]); 

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

      <Form id="formWrap" onSubmit={handleSubmit} ref={formRef}>
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
            <FormInputLabel ref={inputRef} htmlFor={itemWeightID}>
              Weight
            </FormInputLabel>
            <FormInputPriceWeight
              id={itemWeightID}
              type="text"
              name="newWeight"
              pattern="^[0-9]+(\.[0-9]{1,2})?$"
              title="weight xxxxx"
              defaultValue={defaultWeight()}
              onChange={handleChange}
            />
            <WeightSelect weight={weight} inputRef={inputRef} />
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
                onClick={e => e.stopPropagation()}
              >
                {sections.map(section => (
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
    </FormWrapper>
  );
}
