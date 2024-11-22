import React, { useEffect, useState } from "react";
import { getPublicKey, getDetails, getPrivateKey } from "../api";

const KeyDetails = () => {
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [details, setDetails] = useState("");

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
    <div className="w-full my-4">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row items-center">
          <div className="text-2xl font-bold w-1/3">Public Key</div>
          <div className="p-1 bg-gray-100 rounded-md w-2/3">{publicKey}</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="text-2xl font-bold w-1/3">Private Key</div>
          <div className="p-1 bg-gray-100 rounded-md w-2/3">{privateKey}</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="text-2xl font-bold w-1/3">Key Details</div>
          <div className="p-1 bg-gray-100 rounded-md w-2/3">{details}</div>
        </div>
      </div>
    </div>
  );
};

export default KeyDetails;