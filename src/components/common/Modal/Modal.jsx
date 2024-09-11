import React from 'react';

import { ModalBackdrop, CloseBtn, Wrapp, CloseIcon } from './Modal.styled';

export const Modal = ({ active, onClick, setActive, children }) => {
  document.body.style.overflow = 'hidden';

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setActive(false);
      document.body.style.overflow = '';
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return (
    <ModalBackdrop
      className={active ? 'modal active' : 'modal'}
      onClick={onClick}
    >
      <Wrapp>
        {children}
        <CloseBtn onClick={onClick}>
          <CloseIcon />
        </CloseBtn>
      </Wrapp>
    </ModalBackdrop>
  );
};
