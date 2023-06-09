import styled from 'styled-components';
import {MdDeleteForever} from 'react-icons/md';

export const ItemsList = styled.li`
    display: flex;
    &:not(:last-child) {
    margin-bottom: 5px;
}
`
export const Item = styled.button`
border: none;
background-color: transparent;
    width: 120px;
`
export const ItemList = styled.div`
    /* flex-direction: column;
    font-size: 25px; */
`
    
export const DelItem  = styled.span`

margin: auto;
cursor: pointer;

`
export const DelIcon = styled(MdDeleteForever)`
    color: red;
`
export const Price = styled.span`
display: flex;
`