import React from 'react';
// import { useSelector } from 'react-redux';
// import { getSections } from 'redux/sections/sections-selector';
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

const btnId = nanoid();

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

function ItemsSections({section}) {
  // const sections = useSelector(getSections);
  // console.log(section)

  const { 
    category,
  } = section;
  // console.log(category)

  const buttons = [
    {
      btn: category,
      link: category,
    }
  
  ];
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Wrapper>
      <FilterList>
        {/* <CommonLinks> */}
          {buttons.map(b => (
            <Item key={btnId}>
              <Button to={'/items/' + b.link} name={b.link}>
                {b.btn}
              </Button>
            </Item>
          ))}
          
        {/* </CommonLinks> */}
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
