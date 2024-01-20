import styled from 'styled-components';


export const List = styled.div`
text-align: center;
color: #ffffff;

`

export const Title = styled.h2`
  font-size: 25px;
  position: sticky;
  top: -1px;
`

export const ImgLive = styled.img`
/* position: relative; */
display: flex;
  width: 100px;
  height: 100px;
  /* margin-right: 5px; */
  justify-content: flex-end;
  /* right: 5px;
  bottom: auto; */
  border-radius: 5px;

`
export const ItemList = styled.li`
  display: flex;
  height: 100px;
  
  align-items: center;
  justify-content: space-between;
  margin-left:auto;
  margin-right: auto;
  text-align: center;
      &:not(:first-child) {
      margin-top: 10px;
  }

  /* padding-left: 10px;
  padding-right: 5px; */
  padding: 5px 5px 5px 10px;
  border-radius: 10px;
  border: 1px solid rgb(7, 94, 138);

  overflow: hidden;
text-overflow: ellipsis;
`;
export const ItemsGroup = styled.div`
padding-top: 5px;
padding-bottom: 5px;
  /* display:flex; */
  width: 100%;
`
export const ItemTitle = styled.p`
color: grey;
height: 20px;
font-size: 17px;
`
export const ItemDescriptionList = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 4px;
margin-bottom: 4px;
height: 50px;
max-width: 200px;
`
export const ItemDescription = styled.p`
/* padding: 3px; */
padding-left: 3px;
padding-right: 3px;
height: 40px;
font-size: 11px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;

`
export const ItemPrice = styled.p`
/* height: 15px; */
font-size: 17px;
  display: flex;
  color: #883030;
`
