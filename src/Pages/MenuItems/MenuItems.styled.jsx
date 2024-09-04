import styled, { css } from 'styled-components';
import { Btn, TextBtn } from 'components/Button/Button.styled';
import { device } from 'Device';

export const Sections = styled.div`
    display: flex;
    /* margin-top: 25px; */
    /* padding-left: 5px; */
    padding-right: 5px;
`  

export const SectionWrap = styled.div`
/* height:calc(100vh - ${props => props.theme.size.navbarHeightMobile}); */
  background-color: ${props => props.theme.colors.sectionPanel};
  
  position: fixed;
    top: ${props => props.theme.size.navbarHeightMobile};
    bottom: 0px;
    /* left: 0px; */
    z-index: 500;

    
    /* max-height: 100vh; */
    

  transition: width 0.3 s ease;
  
  ${props =>
    props.value &&
    css`
    /* position: relative; */
      width: 40px;
    `};
    @media ${device.tablet} {
      /* height:calc(100vh - ${props => props.theme.size.navbarHeightTablet}); */
      top: ${props => props.theme.size.navbarHeightTablet};
      /* bottom: 0px; */
    }; 
    @media ${device.desktop} {
      /* height:calc(100vh - ${props => props.theme.size.navbarHeightDesktop}); */
      top: ${props => props.theme.size.navbarHeightDesktop};
      /* bottom: 0px; */
    }; 
`
export const MenuOptions = styled.ul`
  position: absolute;
  display: flex;
  top: 5px;
  left: 0px;
  ${props =>
    props.value &&
    css`
      transform: translateX(-100%);
      opacity: 0;
    `}
`
export const MenuOptionsList = styled.li`
  
  p.active {
    color: ${props => props.theme.colors.btnActive};
  }
      &:hover,
       &:focus {
        color: ${props => props.theme.colors.focusActive};
        cursor: pointer;
  };

&:first-child {
  padding-left: 5px;
};
&:not(:first-child) {
  margin-left: 5px;
}
`
export const MenuOptionsText = styled.p`
  width: 55px;
  
`

export const SectionForm = styled.div`
box-sizing: border-box;
    border: 4px;
    width: 160px;
    padding-top: 50px;
    padding-bottom: 20px;
    /* display: none; */
    opacity: 1;
    /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  /* width: 100%; */
  /* height: 90vh; */
  overflow-y: auto;
    scrollbar-width: none;
    /* height:calc(100vh - ${props => props.theme.size.navbarHeightMobile}); */
  height: 100%;
  /* background-color: #cbcbcb; */

  /* transform: translateX(0); */

  transition: 
  transform 1s cubic-bezier(0.645, 0.045, 0.355, 1),
  opacity 2s;

  ${props =>
    props.value &&
    css`
      transform: translateX(-100%);
      opacity: 0;
    `}

    @media ${device.tablet} {
        width: 300px;
    };
`

export const AddButton = styled(Btn)`
        position: relative;
          right: 0px;
          height: 25px;
          margin-top: 10px;
          min-width: 100px;
          font-size: 15px;
          color: #010101;
`
export const AddButtonText = styled(TextBtn)`
  

`
