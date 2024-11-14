import React, { useState, useEffect } from 'react';
import SignForm from '../components/SignForm';
import VerifyForm from '../components/VerifyForm';
import KeyDetails from '../components/KeyDetails';

const SignVerifyPage = () => {
  const [signature, setSignature] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  useEffect(() => {
    if (signature) {
      console.log('Signature updated:', signature);
    }
  }, [signature]);

  return (
    <div>
      <h2>Sign/Verify</h2>
      <SignForm setSignature={setSignature} />
      {signature && (
        <div className="signature-output">
          <h3>Generated Signature</h3>
          <pre>{signature}</pre>
        </div>
      )}
      <VerifyForm setVerificationResult={setVerificationResult} />
      {verificationResult && (
        <div className="verification-result">
          <h3>Verification Result</h3>
          <p>{verificationResult}</p>
        </div>
      )}
    <KeyDetails />
    </div>
  );
};

export default SignVerifyPage;
