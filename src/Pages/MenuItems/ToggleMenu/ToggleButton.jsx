// import React, { useContext } from 'react';
// import styled from 'styled-components';
// import { MenuContext } from './navState';
import { MenuButton, BarClose, BarOpen } from './ToggleButton.styled';


const HamburgerButton = ({moveMenu, moveSection}) => {
  // const { isMenuClose, toggleMenuMode } = useContext(MenuContext);


  console.log("moveSection", moveSection)

  const clickHandler = () => {
    moveMenu();
    // console.log("value", value)
    // toggleMenuMode();
    
  };

  return (
    <MenuButton
      
      onClick={clickHandler}
    >{moveSection ? <BarOpen />  : <BarClose />} 

    </MenuButton>
  );
};

export default HamburgerButton;