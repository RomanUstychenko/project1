import React, { useRef } from 'react';
import QRCode from 'react-qr-code';

import { getUser } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';

import * as htmlToImage from 'html-to-image';

import { Wrapper, Title, QrName, QrWrap, Button, Text } from './QRCode.styled';

function QrResult() {
  const user = useSelector(getUser);

  // Перший підкаталог після доменного імені
  const firstSubdirectory = window.location.pathname.split('/')[1];

  const wey = `${window.location.origin}/${firstSubdirectory}/live/${user._id}`;

  const ref = useRef(null);

  const saveQRCode = () => {
    const svgElement = ref.current;

    if (svgElement) {
      htmlToImage
        .toPng(svgElement)
        .then(dataUrl => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = `QRCode-${user.name}.png`;
          link.click();
        })
        .catch(error => {
          console.error('Помилка при конвертації SVG в PNG:', error);
        });
    }
  };

  return (
    <Wrapper onClick={e => e.stopPropagation()}>
      <Title>QR Code {user.name}</Title>
      <QrWrap ref={ref}>
        <QrName>{user.name}</QrName>
        <QRCode value={wey} />
      </QrWrap>
      <Button onClick={saveQRCode}>
        <Text>Зберегти QR-код</Text>
      </Button>
    </Wrapper>
  );
}
export default QrResult;
