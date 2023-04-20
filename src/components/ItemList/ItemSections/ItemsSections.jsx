import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { nanoid } from 'nanoid';
import {
  Button,
  FilterList,
  Item,
  Wrapper,
  // AuthLinks,
  CommonLinks,
} from './ItemsSections.styled';

const buttons = [
  {
    btn: 'first',
    link: 'first',
  },
  {
    btn: 'second',
    link: 'second',
  },
  {
    btn: 'third',
    link: 'third',
  },

];

// const authButtons = [
//   {
//     btn: 'favorite ads',
//     link: 'favorites-ads',
//   },
//   {
//     btn: 'my ads',
//     link: 'my-ads',
//   },
// ];

function ItemsSections() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Wrapper>
      <FilterList>
        <CommonLinks>
          {buttons.map(b => (
            <Item key={nanoid()}>
              <Button to={'/items/' + b.link} name={b.link}>
                {b.btn}
              </Button>
            </Item>
          ))}
        </CommonLinks>
        {/* <AuthLinks>
          {isLoggedIn &&
            authButtons.map(b => (
              <Item key={nanoid()}>
                <Button to={'/items/' + b.link} name={b.link}>
                  {b.btn}
                </Button>
              </Item>
            ))}
        </AuthLinks> */}
      </FilterList>
    </Wrapper>
  );
}

export default ItemsSections;
