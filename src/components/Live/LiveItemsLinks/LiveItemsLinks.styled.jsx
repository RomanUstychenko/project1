import styled from 'styled-components';

export const ListNavigation = styled.nav`
  position: sticky;
  top: 0px;
  display: flex;
  font-size: 35px;
  overflow-y: hidden;
  scrollbar-width: none;

  overflow-x: auto; /* Дозволяє горизонтальну прокрутку */
    /* overflow-y: hidden; Приховує вертикальну прокрутку */
    white-space: nowrap; /* Забезпечує рядкову прокрутку */
    scroll-behavior: smooth; /* Плавна прокрутка */


`
export const ListCategory = styled.ul`
  display: flex;
   font-size: 20px;

`
export const ListCategoryItem = styled.li`
    display: flex;
    background: #3b3c3d;
    border-radius: 24px;
    font-weight: 600;
    flex-shrink: 0;
    cursor: pointer;
        &:not(:last-child) {
margin-right:10px ;
    }
`

export const ListCategoryItemLink = styled.a`
color: white;
flex-shrink: 0;
display: inline-block;
padding: 16px;
`


















