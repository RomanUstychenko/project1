import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import styled, { css } from 'styled-components';
import { MenuContext } from './navState';
// import HamburgerButton from './ToggleMenu/ToggleButton';
import { getSections } from "redux/sections/sections-selector"
import ItemsSections from "components/Section/ItemSections/ItemsSections"
// const Menu = styled.nav`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   bottom: 0px;
//   z-index: 293;
//   display: block;
//   width: 400px;
//   max-width: 100%;
//   margin-top: 0px;
//   padding-top: 100px;
//   padding-right: 0px;
//   align-items: stretch;
//   background-color: #001698;
//   transform: translateX(0);
//   transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

//   ${props =>
//     props.close &&
//     css`
//       transform: translateX(-100%);
//     `}
// `;



export const SideMenus = ({ children }) => {
  const { isMenuClose } = useContext(MenuContext);
console.log("isMenuClose", isMenuClose)
  return <nav close={isMenuClose}>
<>
<p>hello</p>
      {children}
    </>
</nav>;
};

SideMenus.propTypes = {
  children: PropTypes.node,
};

// export const SideMenus = () => {
//   const   sections = useSelector(getSections);
//   const { isMenuClose } = useContext(MenuContext);
//   // console.log(isMenuClose)

//   return (
// <>
//     <SectionWrap 
//     // ref={node}
//     close={isMenuClose}
//     >
//        <HamburgerButton
//        close={isMenuClose}
//        />
// <SectionForm close={isMenuClose}
//     >
//       <ul>
//         {sections.map(section =>
//          <ItemsSections
//          section={section}
//          ></ItemsSections>)
//       }
//       </ul>
//             <AddButton
//     type="button"
//     onClick={() => setModalAddSectionActive(true)}>
//       <AddButtonText>Add Section</AddButtonText>
//     </AddButton>
//      </SectionForm>
//     </SectionWrap>
//     </>
// );
// };