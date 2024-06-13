import styled from 'styled-components';
import { device } from 'Device';

export const FormWrapper = styled.div`
z-index: 1;
color: black;
min-width: 320px;
max-width: 370px;
height: 500px;
background-color: #919191;
    border: 1px solid rgb(7, 94, 138);
    @media ${device.tablet} {
        min-width: 500px;
        height: 400px;
    }; 
    @media ${device.desktop} {
      
    }; 
`
export const FormImgWrapper = styled.div`
margin-top: 15px;
position: relative;
    display: block;
    @media ${device.tablet} {
        margin-top: 5px;
    };
`

export const Img = styled.img`
border-radius: 5px;
width: 250px;
height: 250px;
@media ${device.tablet} {
    width: 220px;
    height: 220px;
    };
`

export const ListDetails = styled.ul`
height: 250px;

    
`
export const ItemName = styled.li`
    font-size: 20px;
`
export const Description = styled.li`
max-height: 180px;
overflow-y: auto;
/* overflow: hidden; */
text-overflow: ellipsis;
@media ${device.tablet} {
    max-height: 120px;
    };
`
export const Price = styled.li`
position: absolute;
left: 0;
bottom: 5px;
font-size: 20px;
    color: #5c2020;
`