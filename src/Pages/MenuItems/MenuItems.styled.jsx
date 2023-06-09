import styled from 'styled-components';


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
 padding: 3px 10px;
 border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.btn};
        &:hover,
       &:focus {
        background-color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
 `   
export const SectionForm = styled.div`
    border: 4px;
    width: 150px;
`

