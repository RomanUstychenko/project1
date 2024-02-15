import React, { useContext } from 'react';
// import styled from 'styled-components';
import { MenuContext } from './navState';
import { MenuButton, BarClose, BarOpen } from './ToggleButton.styled';


const HamburgerButton = () => {
  const { isMenuClose, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      // className={isMenuOpen ? 'active' : ''}
    //   aria-label="Открыть главное меню"
      onClick={clickHandler}
    >{isMenuClose ? <BarOpen />  : <BarClose />} 
      {/* <BarClose />
      <BarOpen /> */}
      {/* <Bar />
      <Bar /> */}
    </MenuButton>
  );
};

export default HamburgerButton;