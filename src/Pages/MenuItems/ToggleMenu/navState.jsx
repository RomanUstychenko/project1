import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MenuContext = createContext({
  isMenuClose: false,
  toggleMenuMode: () => {},
});

const NavState = ({ children }) => {
  const [isMenuClose, setMenuClose] = useState(false);

  function toggleMenuMode() {
    setMenuClose(!isMenuClose);
    console.log("isMenuClose", isMenuClose)
  }

  return (
    <MenuContext.Provider value={{ isMenuClose, toggleMenuMode }}>{children}</MenuContext.Provider>
  );
};

NavState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavState;