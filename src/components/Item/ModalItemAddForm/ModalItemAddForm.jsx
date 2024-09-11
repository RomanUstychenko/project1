import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  Form,
  FormInputList,
  FormInputLabel,
  FormInput,
} from 'components/common/GeneralStyle/Input.styled';

import { getItemWeightUnit } from 'redux/items/items-selector';
import { setItemWeightUnit } from 'redux/items/items-slice';
import { addItems } from 'redux/items/items-operation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button } from 'components/Button/Button';
import WeightSelect from 'components/common/WeightSelect/WeightSelect';

export default function ModalItemAddForm({
  setModalActive,
  category,
  itemsCategory,
}) {
  const dispatch = useDispatch();

  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  const [section, setSection] = useState(category);

  const inputRef = useRef(null);

  const itemNameID = nanoid();
  const descriptionID = nanoid();
  const priceID = nanoid();
  const weightID = nanoid();

  const unit = useSelector(getItemWeightUnit);

  const formatWeight = () => {
    if (!weight) {
      return '';
    } else if (!unit) {
      return `${weight}g`;
    } else {
      return `${weight}${unit}`;
    }
  };

  const handleChange = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'itemName':
        setItemName(e.currentTarget.value);
        break;
      case 'description':
        setDescription(e.currentTarget.value);
        break;
      case 'price':
        setPrice(e.currentTarget.value);
        break;
      case 'weight':
        setWeight(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  // Функція для отримання максимального значення idSort в масиві
  const getMaxIdSort = itemsCategory => {
    return itemsCategory.reduce((max, item) => {
      return Math.max(max, parseInt(item.idSort));
    }, 0);
  };

  const handleSubmit = e => {
    const maxIdSort = getMaxIdSort(itemsCategory);
    e.preventDefault();
    const duplicateItems = itemsCategory.find(
      itemCategory =>
        itemCategory.itemName.toLocaleLowerCase() ===
        itemName.toLocaleLowerCase()
    );
    if (duplicateItems) {
      Notify.failure(`${itemName} is already in item`);
      return;
    } else {
      setSection(category);
      dispatch(
        addItems({
          itemName,
          description,
          price,
          weight: formatWeight(),
          section,
          idSort: (maxIdSort + 1).toString(),
        })
      );
      setItemName('');
      setDescription('');
      setPrice('');
      setWeight('');
      setSection('');
      dispatch(setItemWeightUnit(''));
      setModalActive(false);
    }
  };

  return (
    <Form onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
      <>
        <FormInputList>
          <FormInputLabel htmlFor={itemNameID}>Name</FormInputLabel>
          <FormInput
            id={itemNameID}
            type="text"
            name="itemName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={itemName}
            onChange={handleChange}
          />
        </FormInputList>
        <FormInputList>
          <FormInputLabel htmlFor={descriptionID}>Description</FormInputLabel>
          <FormInput
            id={descriptionID}
            type="text"
            name="description"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={description}
            onChange={handleChange}
          />
        </FormInputList>
        <FormInputList>
          <FormInputLabel htmlFor={priceID}>Price</FormInputLabel>
          <FormInput
            id={priceID}
            type="number"
            name="price"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={price}
            onChange={handleChange}
            required
          />
        </FormInputList>
        <FormInputList>
          <FormInputLabel htmlFor={priceID}>Weight</FormInputLabel>
          <FormInput
            ref={inputRef}
            id={weightID}
            type="number"
            name="weight"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="weight must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={weight}
            onChange={handleChange}
          />
          <WeightSelect data={weight} inputRef={inputRef} />
        </FormInputList>

        <Button
          style={{
            position: 'relative',
            marginTop: '10px',
            right: '0px',
          }}
          text="Add Item"
          type="submit"
        />
      </>
    </Form>
  );
}
