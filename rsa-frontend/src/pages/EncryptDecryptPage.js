import React, { useState } from 'react';
import EncryptDecryptForm from '../components/EncryptDecryptForm';
import MessageDisplay from '../components/MessageDisplay';

const EncryptDecryptPage = () => {
  const [messageOutput, setMessageOutput] = useState('');

  return (
    <div>
      <EncryptDecryptForm setMessageOutput={setMessageOutput} />
      <MessageDisplay messageOutput={messageOutput} />
    </div>
  );
};

export default EncryptDecryptPage;