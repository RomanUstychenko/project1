import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from './navState';
import arrow from './arrow.svg';

const Menu = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 400px;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 100px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #001698;
  transform: translateX(0);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
    props.close &&
    css`
      transform: translateX(-100%);
    `}
`;



export const SideMenu = () => {
  const { isMenuClose } = useContext(MenuContext);

  return <Menu close={isMenuClose}>
<>
      <p href="/">Главная</p>
    </>
</Menu>;
};

// SideMenu.propTypes = {
//   children: PropTypes.node,
// };