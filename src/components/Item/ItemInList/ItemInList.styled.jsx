import styled from 'styled-components';
import {MdDeleteForever} from 'react-icons/md';

export const ItemsList = styled.li`
    display: flex;
`
export const Item = styled.button`
    width: 200px;
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