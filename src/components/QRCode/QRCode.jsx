import React, { useRef } from 'react';
import QRCode from 'react-qr-code';

import { getUser } from "redux/auth/auth-selector";
import { useSelector } from "react-redux";

import * as htmlToImage from 'html-to-image';

import { Wrapper, Title, QrName, QrWrap, Button, Text } from './QRCode.styled';

function QrResult() {

  const user = useSelector(getUser);

  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  // Перевіряємо, чи встановлений порт
  const port = window.location.port ? `:${window.location.port}` : '';
  const pathAfterHostname = window.location.pathname;
   // Розбиваємо шлях на частини
   const pathParts = pathAfterHostname.split('/');
   // Перший підкаталог після доменного імені
   const firstSubdirectory = pathParts[1];
  // Складаємо початок адреси
  const baseURL = `${protocol}//${hostname}${port}/${firstSubdirectory}`;


  const wey = `${baseURL}/live/${user._id}`


const ref = useRef(null)


const saveQRCode = async () => {
  const svgElement = ref.current; // Отримання посилання на SVG-елемент за допомогою useRef

  if (!svgElement) {
    console.error('SVG елемент не знайдено');
    return;
  }
  htmlToImage.toPng(svgElement)
    .then(function (dataUrl) {
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `QRCode-${user.name}.png`;
      link.click();
    })
    .catch(function (error) {
      console.error('Помилка при конвертації SVG в PNG:', error);
    });
};


  return (
    <Wrapper
    onClick={e => e.stopPropagation()}>
      <Title>QR Code {user.name}</Title>
<QrWrap
ref={ref}
>
  <QrName
  >{user.name}</QrName>
      <QRCode 
      value={wey} 
      />
      </QrWrap>
      <Button onClick={saveQRCode}>
        <Text>Зберегти QR-код</Text></Button>
    </Wrapper>
  );
}
export default QrResult;