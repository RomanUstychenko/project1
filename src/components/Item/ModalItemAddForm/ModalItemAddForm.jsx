import { useState, useRef, useMemo } from 'react';
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

  const [formData, setFormData] = useState({
    itemName: '',
    price: '',
    weight: '',
    description: '',
    section: category,
  });

  const inputRef = useRef(null);

  const ids = useMemo(
    () => ({
      itemNameID: nanoid(),
      descriptionID: nanoid(),
      priceID: nanoid(),
      weightID: nanoid(),
    }),
    []
  );

  const unit = useSelector(getItemWeightUnit);

  const formatWeight = () => {
    return !formData.weight ? '' : `${formData.weight}${unit || 'g'}`;
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Функція для отримання максимального значення idSort в масиві

  const maxIdSort = useMemo(() => {
    return itemsCategory.reduce((max, item) => {
      return Math.max(max, parseInt(item.idSort));
    }, 0);
  }, [itemsCategory]);

  const handleSubmit = e => {
    e.preventDefault();
    const duplicateItems = itemsCategory.find(
      itemCategory =>
        itemCategory.itemName.toLocaleLowerCase() ===
        formData.itemName.toLocaleLowerCase()
    );
    if (duplicateItems) {
      Notify.failure(`${formData.itemName} is already in item`);
      return;
    } else {
      dispatch(
        addItems({
          ...formData,
          weight: formatWeight(),
          idSort: (maxIdSort + 1).toString(),
        })
      );

      setFormData({
        itemName: '',
        price: '',
        weight: '',
        description: '',
        section: category,
      });
      dispatch(setItemWeightUnit(''));
      setModalActive(false);
    }
  };

  return (
    <Form onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
      <>
        <FormInputList>
          <FormInputLabel htmlFor={ids.itemNameID}>Name</FormInputLabel>
          <FormInput
            id={ids.itemNameID}
            type="text"
            name="itemName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={formData.itemName}
            onChange={handleChange}
          />
        </FormInputList>
        <FormInputList>
          <FormInputLabel htmlFor={ids.descriptionID}>
            Description
          </FormInputLabel>
          <FormInput
            id={ids.descriptionID}
            type="text"
            name="description"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={formData.description}
            onChange={handleChange}
          />
        </FormInputList>
        <FormInputList>
          <FormInputLabel htmlFor={ids.priceID}>Price</FormInputLabel>
          <FormInput
            id={ids.priceID}
            type="number"
            name="price"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </FormInputList>
        <FormInputList>
          <FormInputLabel htmlFor={ids.priceID}>Weight</FormInputLabel>
          <FormInput
            ref={inputRef}
            id={ids.weightID}
            type="number"
            name="weight"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="weight must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={formData.weight}
            onChange={handleChange}
          />
          <WeightSelect data={formData.weight} inputRef={inputRef} />
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
