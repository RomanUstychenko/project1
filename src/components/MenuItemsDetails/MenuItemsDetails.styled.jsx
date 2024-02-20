import styled from 'styled-components';
import { Btn, TextBtn } from 'components/Button/Button.styled';

export const ItemsList = styled.div`
    margin-left: 5px;
    width: 100%;
` 
    
export const ItemsLoading  = styled.p`
    color: green;
`
export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 10px 0px;
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
export const AddItemButton = styled(Btn)`
            position: relative;
          right: 0px;
          height: 25px;
          padding: 0px 10px;
          min-width: 80px;
          font-size: 15px;
          color: #010101;

`
export const AddItemText = styled(TextBtn)`
    

`