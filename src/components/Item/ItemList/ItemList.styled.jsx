import styled from 'styled-components';
import { device } from 'Device';

export const List = styled.ul`
@media ${device.tablet} {
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
}
@media ${device.desktop} {
    margin-top: 0px;
}
`
export const NamesWrap = styled.div`
  display: none;
  @media ${device.tablet} {
        display: flex;
        /* align-items: center; */
        justify-content: space-between;
        padding-bottom: 5px;
        border-bottom: 1px solid #161616;
    
        /* margin-bottom: 20px; */
    };
`
export const NamesList = styled.ul`
  /* display: none; */
  @media ${device.tablet} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        /* padding-bottom: 5px; */
        /* border-bottom: 1px solid #161616; */
     
        /* margin-bottom: 20px; */
    };
`
export const Names = styled.li`
     display: none;
  @media ${device.tablet} {
    color: grey;
    display: flex;
    justify-content: center;
    &:first-child {
        padding-left: 25px;
        text-align: left;
    }
    };

`