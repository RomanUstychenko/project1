import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Filter from 'components/filter/Filter';
import ItemsSize from './items';

import { List, NamesWrap, NamesList, Names } from './ItemList.styled';
import ItemInList from 'components/Item/ItemInList/ItemInList';

import { geItemsByCategory } from 'redux/items/items-operation';

export const ItemList = ({ items }) => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  const dispatch = useDispatch();

  useEffect(() => {
    if (category === undefined) {
    } else {
      dispatch(geItemsByCategory({ category: category }));
    }
  }, [dispatch, category, items]);

  const resultSize = ItemsSize();
  return (
    <>
      <List>
        <NamesWrap>
          <Filter primary={false} />
          <NamesList>
            {resultSize.map(({ title, width }) => {
              return (
                <Names key={title} style={{ width }}>
                  <p style={{ width }}>{title}</p>
                </Names>
              );
            })}
          </NamesList>
        </NamesWrap>

        <ItemInList />
      </List>
    </>
  );
};
