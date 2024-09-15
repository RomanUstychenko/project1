import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { deleteItem } from 'redux/items/items-operation';
import {
  TextWrapper,
  Text,
  ItemDeleteButton,
  ItemDeleteTextButton,
} from './ModalItemDelete.styled';

export default function ModalItemDelete({ _id, closeModal }) {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(deleteItem(_id));
    closeModal();
  }, [dispatch, _id, closeModal]);

  const handleClose = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const renderButton = (text, onClickHandler) => (
    <ItemDeleteButton type="button" onClick={onClickHandler}>
      <ItemDeleteTextButton>{text}</ItemDeleteTextButton>
    </ItemDeleteButton>
  );

  return (
    <TextWrapper onClick={e => e.stopPropagation()}>
      <Text>Do you really wont to delete?</Text>

      {renderButton('Yes', handleDelete)}
      {renderButton('No', handleClose)}
    </TextWrapper>
  );
}
