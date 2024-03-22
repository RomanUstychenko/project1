import styled, { css } from 'styled-components';
import { Btn, TextBtn } from 'components/Button/Button.styled';
import { device } from 'Device';

export const Sections = styled.div`
    display: flex;
    /* margin-top: 25px; */
    padding-left: 5px;
    padding-right: 5px;
`  


export const SectionWrap = styled.div`
height:calc(100vh - ${props => props.theme.size.navbarHeightMobile});
position: relative;
  background-color: #cbcbcb;
  transition: 
  width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  ${props =>
    props.value &&
    css`
      width: 40px;
    `};
    @media ${device.tablet} {
      height:calc(100vh - ${props => props.theme.size.navbarHeightTablet});
    }; 
    @media ${device.tablet} {
      height:calc(100vh - ${props => props.theme.size.navbarHeightDesktop});
    }; 
`

export const SectionForm = styled.div`
box-sizing: border-box;
    border: 4px;
    width: 160px;
    padding-top: 35px;
    /* display: none; */
    opacity: 1;
    /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  /* width: 100%; */
  /* height: 90vh; */
  
  background-color: #cbcbcb;

  /* transform: translateX(0); */

  transition: 
  transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
  opacity 0.3s;

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
