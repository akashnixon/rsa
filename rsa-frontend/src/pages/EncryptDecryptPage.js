import React, { useState } from 'react';
import EncryptDecryptForm from '../components/EncryptDecryptForm';
import MessageDisplay from '../components/MessageDisplay';
import KeyDetails from '../components/KeyDetails';

const EncryptDecryptPage = () => {
  const [messageOutput, setMessageOutput] = useState('');

  return (
    <div>
      <h2>Encrypt/Decrypt</h2>
      <EncryptDecryptForm setMessageOutput={setMessageOutput} />
      <MessageDisplay messageOutput={messageOutput} />
      <KeyDetails />
    </div>
  );
};

export default EncryptDecryptPage;
