import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MenuContext = createContext({
  isMenuClose: true,
  toggleMenu: () => {},
});

const NavState = ({ children }) => {
  const [isMenuClose, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuClose);
  }

  return (
    <MenuContext.Provider value={{ isMenuClose, toggleMenuMode }}>{children}</MenuContext.Provider>
  );
};

NavState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavState;