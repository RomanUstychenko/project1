import styled from 'styled-components';


export const ItemsList = styled.div`
    margin-left: 5px;
    width: 150px;
` 
    
export const ItemsLoading  = styled.p`
    color: green;
`
export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
`
export const BtnAdd = styled.button`
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