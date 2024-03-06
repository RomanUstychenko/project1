import React from 'react';
import QRCode from 'react-qr-code';

function QrResult() {
  return (
    <div>
      <h1>QR Code Example</h1>
      <QRCode value="https://example.com" />
    </div>
  );
}
export default QrResult;