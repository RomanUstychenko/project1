import styled, { keyframes, css } from 'styled-components';


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

 const slideIn = keyframes`
 from {
   transform: translateX(0);
 }
 to {
   transform: translateX(-100%);
   background-color: darkblue;
 }
`


const slideInAnimation = css`
  animation: ${slideIn} 0.5s ;
`;

export const SectionForm = styled.div`
    border: 4px;
    width: 150px;


    position: fixed;
  top: 0;
  left: 0;
  /* width: 100%; */
  height: 100%;
  background-color: white;
  /* transform: translateX(-100%); */
    ${({ isVisible }) => isVisible && slideInAnimation}
`
export const SectionFormHide = styled.button`

`



// const StyledMenu = styled.div`
//   /* Додайте інші стилі за потребою */
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: white;
//   transform: translateX(-100%);
//   animation: ${({ isVisible }) => (isVisible ? `${slideIn} 0.5s ease-out` : 'none')};
// `;
