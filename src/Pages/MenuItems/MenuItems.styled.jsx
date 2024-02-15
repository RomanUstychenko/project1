import styled, { css } from 'styled-components';


export const Sections = styled.div`
/* color: white; */
    /* color: rgb(38, 146, 179); */
    display: flex;
    margin-top: 25px;
    /* margin-left: 15px; */
    padding-left: 5px;
    padding-right: 5px;
`
 export const BtnAddSection = styled.button`

 padding: 10px 10px;
 border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.btn};
        &:hover,
       &:focus {
        background-color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
 `   

 

export const SectionWrap = styled.div`
  width: 100%;

  transition: 
  width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  ${props =>
    props.close &&
    css`
      width: 50px;
    `}


`


export const SectionForm = styled.div`
box-sizing: border-box;
    border: 4px;
    width: 150px;
    padding-top: 25px;
    /* display: none; */
    opacity: 1;
    /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  /* width: 100%; */
  height: 100vh;
  background-color: #cbcbcb;

  /* transform: translateX(0); */

  transition: 
  transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
  opacity 0.3s;

  ${props =>
    props.close &&
    css`
      transform: translateX(-100%);
      opacity: 0;
    `}
`

