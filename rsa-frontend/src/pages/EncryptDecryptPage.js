import React, { useState } from 'react';
import EncryptDecryptForm from '../components/EncryptDecryptForm';
import MessageDisplay from '../components/MessageDisplay';
import KeyDetails from '../components/KeyDetails';

const EncryptDecryptPage = () => {
  const [messageOutput, setMessageOutput] = useState('');

  return (
    <div>
      <EncryptDecryptForm setMessageOutput={setMessageOutput} />
      <MessageDisplay messageOutput={messageOutput} />
      <KeyDetails />
    </div>
  );
};

export default EncryptDecryptPage;
