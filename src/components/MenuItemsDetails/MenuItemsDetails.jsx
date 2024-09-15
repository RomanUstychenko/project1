import { ItemList } from '../../components/Item/ItemList/ItemList';
import Filter from '../../components/filter/Filter';
import {
  ItemsList,
  BtnWrapper,
  AddItemButton,
  AddItemText,
  NoItems,
} from './MenuItemsDetails.styled';
import { useSelector } from 'react-redux';
import { getItemsState } from 'redux/items/items-selector';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from 'Pages/MenuItems/ToggleMenu/navState';

export default function MenuItemsDetails({ setModalActive }) {
  const { isMenuClose } = useContext(MenuContext);

  const location = useLocation();
  const category = location.pathname.split('/')[2];

  const { items, itemsCategory, loading } = useSelector(getItemsState);

  return (
    <ItemsList value={isMenuClose}>
      {category && (
        <>
          <BtnWrapper>
            <AddItemButton type="button" onClick={() => setModalActive(true)}>
              <AddItemText>Add Item</AddItemText>
            </AddItemButton>
          </BtnWrapper>
          <Filter primary={true} />

          {!loading && items.length > 0 && (
            <ItemList items={items} itemsCategory={itemsCategory} />
          )}
        </>
      )}
      {itemsCategory.length === 0 && <NoItems>No items yet</NoItems>}
    </ItemsList>
  );
}
