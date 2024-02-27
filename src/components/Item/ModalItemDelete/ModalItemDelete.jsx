import { useDispatch } from 'react-redux';
import { deleteItem } from 'redux/items/items-operation';
import {
  TextWrapper,
  Text,
  ItemDeleteButton,
  ItemDeleteTextButton,
} from './ModalItemDelete.styled';

export default function ModalItemDelete({ _id, closeModal }) {
  const dispatch = useDispatch();

  function DelItem() {
    dispatch(deleteItem(_id));
    closeModal();
  }

  return (
    <TextWrapper onClick={e => e.stopPropagation()}>
      <Text>Do you really wont to delete?</Text>

      <ItemDeleteButton type="button" onClick={() => DelItem()}>
        <ItemDeleteTextButton>Yes</ItemDeleteTextButton>
      </ItemDeleteButton>

      <ItemDeleteButton type="button" onClick={() => closeModal()}>
        <ItemDeleteTextButton>No</ItemDeleteTextButton>
      </ItemDeleteButton>
    </TextWrapper>
  );
}
