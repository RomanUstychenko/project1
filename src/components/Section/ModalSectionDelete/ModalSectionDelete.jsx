import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSection } from 'redux/sections/sections-operation';
import { delItemsByCategory } from 'redux/items/items-operation';
import {
  Text,
  TextWrapper,
  ButtonWrap,
  Button,
  ButtonText,
} from './ModalSectionDelete.styled';
import { getItems } from 'redux/items/items-selector';
import { imgSectionDelete } from 'redux/items/items-operation';

export default function ModalSectionDelete({ _id, closeModal, closeAllModal }) {
  const dispatch = useDispatch();

  const itemImgFilter = useSelector(getItems)
    .filter(section => section.section === _id)
    .map(item => item.itemImgId)
    .filter(Boolean);

  const handleDelete = () => {
    if (itemImgFilter.length > 0) {
      dispatch(imgSectionDelete(itemImgFilter));
    }
    dispatch(delItemsByCategory(_id));
    dispatch(deleteSection(_id));
    closeAllModal();
  };

  return (
    <TextWrapper onClick={e => e.stopPropagation()}>
      <Text>Do you really wont to delete? All items will also be deleted</Text>
      <ButtonWrap>
        <Button type="button" onClick={handleDelete}>
          <ButtonText>Yes</ButtonText>
        </Button>
        <Button type="button" onClick={closeModal}>
          <ButtonText>No</ButtonText>
        </Button>
      </ButtonWrap>
    </TextWrapper>
  );
}
