import styled from 'styled-components';


export const FormWrapper = styled.div`
z-index: 1;
color: black;
width: 300px;
height: 500px;
background-color: #919191;
    border: 1px solid rgb(7, 94, 138);
`
export const FormImgWrapper = styled.div`
margin-top: 15px;
position: relative;
    display: block;
`

export const Img = styled.img`
border-radius: 5px;
width: 250px;
height: 200px;

`

export const ListDetails = styled.ul`
height: 250px;

    
`
export const ItemName = styled.li`
    font-size: 20px;
`
export const Description = styled.li`
max-height: 210px;
overflow-y: scroll;
`
export const Price = styled.li`
position: absolute;
left: 0;
bottom: 10px;
font-size: 20px;
    color: #5c2020;
`