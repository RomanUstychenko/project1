import styled from 'styled-components';
import { device } from 'Device';

export const ItemsFilter = styled.div`
    /* display: flex; */
    display: ${props => (props.primary ? 'flex' : 'none')};
    flex-direction: column;
    @media ${device.tabletOnly} {
    margin-left: 15px;
    };
    @media ${device.desktop} {
        display: ${props => (props.primary ? 'none' : 'flex')};
        width: ${props => (props.primary ? '' : '100%')};
    };
`
export const ItemFilterLabel = styled.label`
    font-size: 15px;
`
export const ItemFilterInput = styled.input`
box-sizing: border-box;
    width: 100%;
    padding-left: 10px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #749574;
`