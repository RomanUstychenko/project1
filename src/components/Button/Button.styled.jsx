import styled from 'styled-components';

export const Btn = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.theme.colors.btn};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: #fff;
    border: none;
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      &:hover,
       &:focus {
        background-color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
` 
  
  