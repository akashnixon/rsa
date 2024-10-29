import React, { useState } from 'react';
import EncryptDecryptForm from './components/EncryptDecryptForm';
import KeyDetails from './components/KeyDetails';
import MessageDisplay from './components/MessageDisplay';
import './App.css';

const App = () => {
  const [messageOutput, setMessageOutput] = useState('');

  return (
    <div className="App">
      <h1>RSA Encryption App</h1>
      <EncryptDecryptForm setMessageOutput={setMessageOutput} />
      <MessageDisplay messageOutput={messageOutput} />
      <KeyDetails />
    </div>
  );
};

export default App;
