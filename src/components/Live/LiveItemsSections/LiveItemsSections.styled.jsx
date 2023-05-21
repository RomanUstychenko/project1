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
  align-items: center;
  justify-content: space-between;
  margin-left:auto;
  margin-right: auto;
  text-align: center;

  /* padding-left: 10px;
  padding-right: 5px; */
  padding: 5px 5px 5px 10px;
  border-radius: 10px;
  border: 1px solid rgb(7, 94, 138);
`;
export const ItemsGroup = styled.div`
  /* display:flex; */
  width: 100%;
`
export const ItemTitle = styled.span`
  font-size: 12px;
`
export const ItemDescription = styled.span`
display: flex;
  font-size: 8px;
`
export const Item = styled.span`
font-size: 10px;
  display: flex;
`
