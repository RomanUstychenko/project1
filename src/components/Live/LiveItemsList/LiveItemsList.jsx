import { useState } from 'react';

import translateCyrillic from 'components/common/transliteration/transliteration';
import noimg from 'img/noimg.jpg';
import {
  List,
  MenuName,
  Title,
  ListItems,
  ImgLive,
  ItemList,
  ItemsGroup,
  ItemTitle,
  ItemDescription,
  ItemDescriptionList,
  ItemPriceList,
  ItemPrice,
} from './LiveItemsList.styled';
import { Modal } from 'components/common/Modal/Modal';
import LiveModalItemDetail from 'components/Live/LiveModalItemDetail/LiveModalItemDetail.jsx';
import formatNumber from 'components/hooks/formatNumber';

function LiveItemsList({ section, items, sectionRefs }) {
  const [modalDetailActive, setModalDetailActive] = useState(false);
  const [openDetailsId, setOpenDetailsId] = useState('');

  function openModal(list) {
    setOpenDetailsId(list._id);
    setModalDetailActive(true);
  }

  function closeModal() {
    setModalDetailActive(false);
    document.body.style.overflow = '';
  }

  const { category, menuOptions } = section;

  const groups = [
    {
      category: category,
      menu: menuOptions,
      list: items,
      item: items.filter(item => item._id === openDetailsId),
    },
  ];

  return (
    <>
      {groups.map(gr => (
        <List
          key={section._id}
          id={translateCyrillic(gr.category)}
          ref={ref =>
            (sectionRefs.current[`#${translateCyrillic(gr.category)}`] = ref)
          }
        >
          <MenuName>Menu {gr.menu}</MenuName>
          <Title key={translateCyrillic(gr.category)}>{gr.category}</Title>

          <ListItems>
            {gr.list.map(list => (
              <ItemList key={list._id} onClick={() => openModal(list)}>
                <ItemsGroup>
                  <ItemTitle>{list.itemName}</ItemTitle>
                  <ItemDescriptionList>
                    <ItemDescription>{list.description}</ItemDescription>
                  </ItemDescriptionList>
                  <ItemPriceList>
                    <ItemPrice> Price: {formatNumber(list.price)}</ItemPrice>
                    {list.weight && <p>/{list.weight}</p>}
                  </ItemPriceList>
                </ItemsGroup>
                <ImgLive src={list.itemImg || noimg} alt="img" loading="lazy" />
              </ItemList>
            ))}
          </ListItems>
        </List>
      ))}

      {modalDetailActive && (
        <Modal
          onClick={() => closeModal()}
          active={modalDetailActive}
          setActive={setModalDetailActive}
        >
          {groups.map(g =>
            g.item.map(i => <LiveModalItemDetail item={i} key={i._id} />)
          )}
        </Modal>
      )}
    </>
  );
}

export default LiveItemsList;
