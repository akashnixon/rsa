import React, { useEffect, useState } from 'react';
import { getPublicKey, getDetails, getPrivateKey } from '../api';

const KeyDetails = () => {
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    const fetchKeys = async () => {
      try {
        const pubKey = await getPublicKey();
        const priKey = await getPrivateKey();
        const det = await getDetails();
        setPublicKey(pubKey);
        setPrivateKey(priKey);
        setDetails(det);
      } catch (error) {
        console.error("Error fetching keys:", error);
      }
    };
    fetchKeys();
  }, []);

  return (
    <div>
      <h2>Public Key</h2>
      <p>{publicKey}</p>
      <h2>Private Key</h2>
      <p>{privateKey}</p>
      <h3>Key Details</h3>
      <p>{details}</p>
    </div>
  );
};

export default KeyDetails;
