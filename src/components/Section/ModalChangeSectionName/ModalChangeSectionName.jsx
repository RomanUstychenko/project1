import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  FormInputList,
  FormInput,
  FormInputLabel,
  LabelName,
} from 'components/common/GeneralStyle/Input.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getSections } from 'redux/sections/sections-selector';
import { updateSection } from 'redux/sections/sections-operation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  BtnList,
  RenameButton,
  RenameText,
  DeleteButtom,
  DeleteText,
} from './ModalChangeSectionName.styled';
import { Modal } from 'components/common/Modal/Modal';
import ModalSectionDelete from '../ModalSectionDelete/ModalSectionDelete';

export default function ModalChangeSectionName({
  category,
  _id,
  idSort,
  closeModal,
  menuOptions,
}) {
  const sections = useSelector(getSections);

  const dispatch = useDispatch();
  const [newSectionName, setNewSectionName] = useState(category);
  const [modalDeleteActive, setModalDeleteActive] = useState(false);

  const sectionNameID = nanoid();

  const handleChange = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'newSectionName':
        setNewSectionName(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const duplicateItems = sections.find(
      section =>
        section.category.toLocaleLowerCase() ===
        newSectionName.toLocaleLowerCase()
    );

    if (duplicateItems) {
      Notify.failure(`${newSectionName} is already in item`);
      return;
    }

    dispatch(
      updateSection({
        _id,
        idSort,
        menuOptions,
        category: newSectionName,
      })
    );
    setNewSectionName('');
    closeModal();
  };

  function closeModalDelete() {
    setModalDeleteActive(false);
    document.body.style.overflow = '';
  }
  function closeAllModal() {
    setModalDeleteActive(false);
    closeModal();
  }

  return (
    <Form onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
      <>
        <FormInputList>
          <FormInputLabel htmlFor={sectionNameID}>
            <LabelName>Change Name</LabelName>
          </FormInputLabel>
          <FormInput
            id={sectionNameID}
            type="text"
            name="newSectionName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may "
            required
            defaultValue={category}
            onChange={handleChange}
          />
        </FormInputList>

        <BtnList>
          <RenameButton>
            <RenameText>Rename</RenameText>
          </RenameButton>
          <DeleteButtom
            type="button"
            onClick={() => setModalDeleteActive(true)}
          >
            <DeleteText>Delete Section</DeleteText>
          </DeleteButtom>
        </BtnList>
        {modalDeleteActive && (
          <Modal
            onClick={() => closeModalDelete()}
            active={modalDeleteActive}
            setActive={setModalDeleteActive}
          >
            <ModalSectionDelete
              closeModal={closeModalDelete}
              closeAllModal={closeAllModal}
              _id={_id}
              category={category}
            />
          </Modal>
        )}
      </>
    </Form>
  );
}
