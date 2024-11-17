import React, { useState } from 'react';
import {signMessage} from '../api';

const SignForm = ({ setSignature }) => {
  const [message, setMessage] = useState('');

  const handleSign = async () => {
    try {
      const signature = await signMessage(message);
      console.log('Generated Signature:', signature);
      setSignature(signature);
    } catch (error) {
      console.error('Error signing the message:', error);
    }
  };

  return (
    <div className="sign-form">
      <h2>Sign Message</h2>
      <input
        type="text"
        placeholder="Enter message to sign"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSign}>Sign</button>
    </div>
  );
};

export default SignForm;
