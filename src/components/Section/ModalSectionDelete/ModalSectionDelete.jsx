import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSection } from 'redux/sections/sections-operation';
import { delItemsByCategory } from 'redux/items/items-operation';
import { Button } from 'components/Button/Button';
import { Text, TextWrapper } from './ModalSectionDelete.styled';
export default function ModalSectionDelete({ _id, closeModal }) {
  const dispatch = useDispatch();
  console.log(_id);
  function DelSection() {
    dispatch(delItemsByCategory(_id));
    dispatch(deleteSection(_id));
    closeModal();
  }

  return (
    <TextWrapper onClick={e => e.stopPropagation()}>
      <Text>Do you really wont to delete? All items will also be deleted
      </Text>

      <Button
        style={{
          marginRight: '25px',
          position: 'relative',
          right: '0px',
          height: '25px',
          padding: '0px 0px',
          minWidth: '80px',
          fontSize: 15,
          color: '#010101',
        }}
        text="Yes"
        type="button"
        onClick={() => {
          DelSection();
        }}
      />
      <Button
        style={{
          position: 'relative',
          right: '0px',
          height: '25px',
          padding: '0px 0px',
          minWidth: '80px',
          fontSize: 15,
          color: '#010101',
        }}
        text="No"
        type="button"
        onClick={() => closeModal()}
      />
    </TextWrapper>
  );
}
