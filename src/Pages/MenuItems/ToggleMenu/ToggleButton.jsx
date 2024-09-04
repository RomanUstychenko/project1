import React, { useContext } from 'react';
import { MenuContext } from './navState';
import { MenuButton, BarClose, BarOpen } from './ToggleButton.styled';


const HamburgerButton = () => {
  const { isMenuClose, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
    console.log("isMenuClose", isMenuClose)
  };

  return (
    <MenuButton
      
      onClick={clickHandler}
    >{isMenuClose ? <BarOpen />  : <BarClose />} 

    </MenuButton>
  );
};

export default HamburgerButton;