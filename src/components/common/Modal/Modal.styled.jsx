import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

export const Wrapp = styled.div`
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
`;
export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  overflow-y: auto;
  overflow-x: hidden;
  transition: 0.5s;
  justify-content: center;
  display: flex;
  opacity: 0;
  pointer-events: none;
  transition: 1s;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  border: none;
  padding: 0;
`;
export const CloseIcon = styled(IoClose)`
  color: #2e2828;
  width: 30px;
  height: 30px;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.btnActive};
    cursor: pointer;
  }
`;
