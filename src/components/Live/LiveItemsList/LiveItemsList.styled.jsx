import styled from 'styled-components';
import { device } from 'Device';


export const List = styled.div`
&:not(:first-child) {
padding-top: 40px;
}
text-align: center;
color: #ffffff;

`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 25px;
`
export const ListItems = styled.ul`
  @media ${device.tablet} {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
};
`

export const ItemList = styled.li`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  margin-left:auto;
  margin-right: auto;
  text-align: center;
  
  padding: 5px 5px 5px 10px;
  border-radius: 10px;
  border: 1px solid rgb(7, 94, 138);

  overflow: hidden;
text-overflow: ellipsis;

@media ${device.mobileOnly} {
  &:not(:first-child) {
      margin-top: 10px;
  }
}
@media ${device.tablet} {
        width: 350px;
        height: 150px;
        margin-top: 10px;
};
`;

export const ImgLive = styled.img`
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: flex-end;
  border-radius: 5px;
  @media ${device.tablet} {
    
        width: 130px;
        height: 130px;
};
`


export const ItemsGroup = styled.div`
padding-top: 5px;
padding-bottom: 5px;
  width: 100%;
  height: 100%;
  @media ${device.tablet} {
    position: relative;
};
`
export const ItemTitle = styled.p`
color: grey;

font-size: 17px;
@media ${device.mobileOnly} {
  height: 20px;
  }
@media ${device.tablet} {
    font-size: 25px;
};
`
export const ItemDescription = styled.p`
padding-left: 3px;
padding-right: 3px;
font-size: 11px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
@media ${device.mobileOnly} {
  height: 40px;
  }
@media ${device.tablet} {
  font-size: 15px;
  -webkit-line-clamp: 4;
};

`
export const ItemDescriptionList = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 4px;
margin-bottom: 4px;
height: 50px;
max-width: 585px;
@media ${device.tablet} {
  max-width: 220px;
  height: 75px;
};
`

export const ItemPrice = styled.p`
font-size: 17px;
  display: flex;
  color: #883030;
  @media ${device.tablet} {
    position: absolute;
    bottom: 5px;
    font-size: 20px;
};
`