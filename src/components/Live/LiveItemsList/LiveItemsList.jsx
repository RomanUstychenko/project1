import { useState } from 'react';

import { nanoid } from 'nanoid';
import translateCyrillic from 'components/common/transliteration/transliteration';
import noimg from 'img/noimg.jpg';
import {
  List,
  Title,
  ListItems,
  ImgLive,
  ItemList,
  ItemsGroup,
  ItemTitle,
  ItemDescription,
  ItemDescriptionList,
  ItemPrice,
} from './LiveItemsList.styled';
import { Modal } from 'components/common/Modal/Modal';
import LiveModalItemDetail from 'components/Live/LiveModalItemDetail/LiveModalItemDetail.jsx';

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

  const { category } = section;

  const groups = [
    {
      category: category,
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
          ref={ref => (sectionRefs.current[`#${translateCyrillic(gr.category)}`] = ref)}
        >
          <Title key={translateCyrillic(gr.category)}>{gr.category}</Title>

          <ListItems key={nanoid()}>
            {gr.list.map(list => (
              <ItemList key={nanoid()} onClick={() => openModal(list)}>
                <ItemsGroup>
                  <ItemTitle>{list.itemName}</ItemTitle>
                  <ItemDescriptionList>
                    <ItemDescription>{list.description}</ItemDescription>
                  </ItemDescriptionList>

                  <ItemPrice> Price: {list.price} </ItemPrice>
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
          {groups.map(g => (
            <>
              {g.item.map(i => (
                <LiveModalItemDetail
                  key={i._id}
                  itemName={i.itemName}
                  price={i.price}
                  description={i.description}
                  itemImg={i.itemImg}
                  _id={i._id}
                  section={category}
                  closeModal={closeModal}
                  setModalDetailActive={setModalDetailActive}
                />
              ))}
            </>
          ))}
        </Modal>
      )}
    </>
  );
}

export default LiveItemsList;
