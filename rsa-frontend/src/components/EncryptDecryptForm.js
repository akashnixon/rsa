import React, { useState } from 'react';
import { encryptMessage, decryptMessage } from '../api';


const EncryptDecryptForm = ({ setMessageOutput }) => {
  const [message, setMessage] = useState('');
  const [isEncrypt, setIsEncrypt] = useState(true);
  const [N, setN] = useState('');
  const [encryptKey, setEncryptKey] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = isEncrypt
        ? await encryptMessage(message, N, encryptKey) 
        : await decryptMessage(message); 
      setMessageOutput(result);
    } catch (error) {
      setMessageOutput('Error processing message');
      console.log(error);
    }
  };

  return (
    <div>
      <h2>{isEncrypt ? "Encrypt" : "Decrypt"} Message</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <textarea
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here"
          className="message-input"
        />
        {isEncrypt && (
          <div className="input-container">
            <input
              type="text"
              value={N}
              onChange={(e) => setN(e.target.value)}
              placeholder="Enter N"
              required
              className="key-input"
            />
            <input
              type="text"
              value={encryptKey}
              onChange={(e) => setEncryptKey(e.target.value)}
              placeholder="Enter e"
              required
              className="key-input"
            />
          </div>
        )}
        <button type="submit">{isEncrypt ? "Encrypt" : "Decrypt"}</button>
      </form>
      <button onClick={() => setIsEncrypt(!isEncrypt)}>
        Switch to {isEncrypt ? "Decrypt" : "Encrypt"}
      </button>
    </div>
  );
};

export default EncryptDecryptForm;
