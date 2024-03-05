import styled from 'styled-components';
import { device } from 'Device';

export const List = styled.ul`
@media ${device.tablet} {
    margin-left: 15px;
    margin-right: 15px;
}
`
export const Names = styled.ul`
  display: none;
  @media ${device.tablet} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    };
`
export const NamesList = styled.li`
     display: none;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    };

`