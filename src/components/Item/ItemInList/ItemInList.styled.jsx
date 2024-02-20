import styled from 'styled-components';
import {MdDeleteForever} from 'react-icons/md';

export const ItemsList = styled.li`
border-radius: 10px;
box-shadow: 7px 20px 14px rgba(10, 4, 1, 0.1);
width:  100%;
    display: flex;
    &:not(:last-child) {
    margin-bottom: 10px;
}
`
export const Item = styled.button`
border: none;
background-color: transparent;
    width: 100%;
`
export const ItemText = styled.p`
    font-size: 20px;
`
export const ItemList = styled.div`
    /* flex-direction: column;
    font-size: 25px; */
`
    
export const DelItem  = styled.span`
display: flex;
    justify-content: center;
    align-items: center;
width: 20px;
/* margin: auto; */
cursor: pointer;

`
export const DelIcon = styled(MdDeleteForever)`



    color: red;
`
export const Price = styled.span`
display: flex;
`