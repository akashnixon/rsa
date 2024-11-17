import React, { useState } from 'react';
import {verifySignature} from '../api';

const VerifyForm = ({ setVerificationResult }) => {
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [partnerN, setPartnerN] = useState('');
  const [partnerE, setPartnerE] = useState('');

  const handleVerify = async () => {
    try {
      const isValid = await verifySignature(message, signature, partnerN, partnerE);
      console.log('Verification Result:', isValid ? 'Valid' : 'Invalid');
      setVerificationResult(isValid ? 'Valid' : 'Invalid');
    } catch (error) {
      console.error('Error verifying the signature:', error);
    }
  };

  return (
    <div className="verify-form">
      <h2>Verify Signature</h2>
      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter signature"
        value={signature}
        onChange={(e) => setSignature(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter partner N"
        value={partnerN}
        onChange={(e) => setPartnerN(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter partner e"
        value={partnerE}
        onChange={(e) => setPartnerE(e.target.value)}
      />
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
};

export default VerifyForm;
