import React, { useState, useEffect } from 'react';
import SignForm from '../components/SignForm';
import VerifyForm from '../components/VerifyForm';

const SignVerifyPage = () => {
  const [signature, setSignature] = useState([]);
  const [verificationResult, setVerificationResult] = useState('');

  useEffect(() => {
    if (signature.length > 0) {
      console.log('Signature updated:', signature);
    }
    if (verificationResult) {
      console.log('Verification Result:', verificationResult);
    }
  }, [signature, verificationResult]);

  return (
    <div>
      <SignForm setSignature={setSignature} />
      {signature.length > 0 && (
        <div className="signature-output">
          <h3>Generated Signature</h3>
          <pre>{`[${signature.join(', ')}]`}</pre>
        </div>
      )}
      <VerifyForm setVerificationResult={setVerificationResult} />
      {verificationResult && (
        <div className="verification-result">
          <h3>Verification Result</h3>
          <p>{verificationResult}</p>
        </div>
      )}
    </div>
  );
};

export default SignVerifyPage;