import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'components/common/Modal/Modal';
import {
  ItemsList,
  ItemTextWrap,
  ItemText,
  ItemDescription,
  ItemWrap,
  Item,
  DelItem,
  DelIcon,
  ItemPriceWrap,
  ItemPriceName,
  ItemPrice,
  ItemWeight,
  ItemSectionWrap,
  ItemSection,
  ButtonWrap,
  MoveButtonSection,
  MoveUpSection,
  MoveDownSection,
} from './ItemInList.styled';
import { useState, useContext } from 'react';
import ModalItemDetail from '../ModalItemDetail/ModalItemDetail';
import ModalItemDelete from '../ModalItemDelete/ModalItemDelete';
import { fetchItems } from 'redux/items/items-operation';
import { MenuContext } from 'Pages/MenuItems/ToggleMenu/navState';
import { getItemsByCategory } from 'redux/items/items-selector';
import { getSections } from 'redux/sections/sections-selector';
import { setItemWeightUnit } from 'redux/items/items-slice';
import { itemUpdate } from 'redux/items/items-operation';

import { getFilter } from 'redux/filter/filter-selector';

import formatNumber from 'components/hooks/formatNumber';
export default function ItemInList() {
  const itemsCategory = useSelector(getItemsByCategory);

  const { isMenuClose } = useContext(MenuContext);

  const dispatch = useDispatch();

  const [modalData, setModalData] = useState({
    isActive: false,
    type: '',
    id: '',
  });

  function closeModal() {
    dispatch(fetchItems());
    dispatch(setItemWeightUnit(''));
    setModalData({ isActive: false, type: '', id: '' });
    document.body.style.overflow = '';
  }

  const handleModalOpen = (type, id) => {
    setModalData({ isActive: true, type, id });
  };

  const sections = useSelector(getSections);

  const filter = item => {
    const filterSection = sections.filter(data => data._id === item.section);
    const filterResult = filterSection.map(fi => fi.category);

    return filterResult;
  };

  const handleUpSection = (item, index) => {
    const upIdSort = itemsCategory[index - 1].idSort;
    const tempIdSort = itemsCategory[index].idSort;
    const upElement = itemsCategory.find(item => item.idSort === upIdSort);

    ///// оновлення idSort поточного елемента /////////
    dispatch(
      itemUpdate({
        _id: item._id,
        itemName: item.itemName,
        description: item.description,
        price: item.price,
        itemImg: item.itemImg,
        section: item.section,
        idSort: upIdSort,
      })
    );
    ///// оновлення idSort верхнього елемента /////////
    dispatch(
      itemUpdate({
        _id: upElement._id,
        itemName: upElement.itemName,
        description: upElement.description,
        price: upElement.price,
        itemImg: upElement.itemImg,
        section: upElement.section,
        idSort: tempIdSort,
      })
    );
    dispatch(fetchItems());
  };

  const handleDownSection = (item, index) => {
    const downIdSort = itemsCategory[index + 1].idSort;
    const tempIdSort = itemsCategory[index].idSort;
    const downElement = itemsCategory.find(item => item.idSort === downIdSort);

    ///// оновлення idSort поточного елемента /////////
    dispatch(
      itemUpdate({
        _id: item._id,
        itemName: item.itemName,
        description: item.description,
        price: item.price,
        itemImg: item.itemImg,
        section: item.section,
        idSort: downIdSort,
      })
    );
    ///// оновлення idSort верхнього елемента /////////
    dispatch(
      itemUpdate({
        _id: downElement._id,
        itemName: downElement.itemName,
        description: downElement.description,
        price: downElement.price,
        itemImg: downElement.itemImg,
        section: downElement.section,
        idSort: tempIdSort,
      })
    );
    dispatch(fetchItems());
  };

  const activeItem = itemsCategory.filter(data => data._id === modalData.id);
  /////  Пошук елемента по назві /////////
  const filterItem = useSelector(getFilter);

  const getFilteredItem = () => {
    if (!filterItem) {
      return itemsCategory;
    }
    const normalizedFilter = filterItem.toLocaleLowerCase();
    const filteredItem = itemsCategory.filter(({ itemName }) => {
      const nornalizedName = itemName.toLocaleLowerCase();
      const result = nornalizedName.includes(normalizedFilter);
      return result;
    });

    return filteredItem;
  };

  return (
    <>
      {getFilteredItem().map((item, index) => (
        <ItemsList key={item._id}>
          {filterItem === '' && (
            <ButtonWrap>
              {index !== 0 && (
                <MoveButtonSection onClick={() => handleUpSection(item, index)}>
                  <MoveUpSection />
                </MoveButtonSection>
              )}
              {index !== itemsCategory.length - 1 && (
                <MoveButtonSection
                  onClick={() => handleDownSection(item, index)}
                >
                  <MoveDownSection />
                </MoveButtonSection>
              )}
            </ButtonWrap>
          )}
          <ItemWrap onClick={() => handleModalOpen('detail', item._id)}>
            <Item>
              <ItemTextWrap>
                <ItemText value={isMenuClose}>{item.itemName}</ItemText>
              </ItemTextWrap>
              <ItemPriceWrap>
                <ItemPriceName>Price:</ItemPriceName>{' '}
                <ItemPrice>{formatNumber(item.price)}</ItemPrice>
                {item.weight && <ItemWeight>/{item.weight}</ItemWeight>}
              </ItemPriceWrap>

              <ItemSectionWrap>
                <ItemSection>{filter(item)}</ItemSection>
              </ItemSectionWrap>
            </Item>
            <ItemDescription>{item.description}</ItemDescription>
          </ItemWrap>
          <DelItem onClick={() => handleModalOpen('delete', item._id)}>
            <DelIcon />
          </DelItem>
        </ItemsList>
      ))}

      {modalData.isActive && (
        <Modal
          onClick={closeModal}
          active={modalData.isActive}
          setActive={() => setModalData(false)}
        >
          {modalData.type === 'delete' ? (
            <ModalItemDelete closeModal={closeModal} _id={modalData.id} />
          ) : (
            <ModalItemDetail
              _id={modalData.id}
              activeItem={activeItem}
              closeModal={closeModal}
            />
          )}
        </Modal>
      )}
    </>
  );
}
