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
          <div className='text-xl font-bold mt-6'>Generated Signature</div>
          <pre>{`[${signature.join(', ')}]`}</pre>
        </div>
      )}
      <VerifyForm setVerificationResult={setVerificationResult} />
      {verificationResult && (
        <div className="verification-result">
          <div className='text-xl font-bold mt-6'>Verification Result</div>
          <div className={`${verificationResult == 'Valid' ? 'text-green-500' : 'text-red-500'}`}>{verificationResult}</div>
        </div>
      )}
    </div>
  );
};

export default SignVerifyPage;