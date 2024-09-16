import { useState, useMemo } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  FormInputList,
  FormInputLabel,
  FormInput,
} from 'components/common/GeneralStyle/Input.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getSections, getMenuOptions } from 'redux/sections/sections-selector';
import { addSection } from 'redux/sections/sections-operation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Btn } from './ModalAddSectionForm.styled';
export default function ModalAddSectionForm({ setModalSectionActive }) {
  const sections = useSelector(getSections);
  const menuActive = useSelector(getMenuOptions);
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');

  const sectionNameID = nanoid();

  const handleChange = e => setCategory(e.currentTarget.value);

  // Функція для отримання максимального значення idSort в масиві

  const maxIdSort = useMemo(() => {
    return sections.reduce((max, section) => Math.max(max, parseInt(section.idSort)), 0);
  }, [sections]);
  
  const normalizedSections = useMemo(
    () => sections.map(section => section.category.toLowerCase()),
    [sections]
  );
  const handleSubmit = e => {
    e.preventDefault();

    if (normalizedSections.includes(category.toLowerCase())) {
      Notify.failure(`${category} is already in item`);
      return;
    }
    dispatch(
      addSection({
        idSort: (maxIdSort + 1).toString(),
        menuOptions: menuActive,
        category,
      })
    );
    setCategory('');
    setModalSectionActive(false);
  };

  return (
    <Form onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
      <FormInputList>
        <FormInputLabel htmlFor={sectionNameID}>Name</FormInputLabel>
        <FormInput
          id={sectionNameID}
          type="text"
          name="category"
          pattern="^[^0-9].*"
          title="A section cannot start with a number"
          required
          value={category}
          onChange={handleChange}
        />
      </FormInputList>

      <Btn text="Add" type="submit" />
    </Form>
  );
}
