import React, { useState } from "react";
import { verifySignature } from "../api";

const VerifyForm = ({ setVerificationResult }) => {
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  const [partnerN, setPartnerN] = useState("");
  const [partnerE, setPartnerE] = useState("");

  const handleVerify = async () => {
    try {
      const isValid = await verifySignature(
        message,
        signature,
        partnerN,
        partnerE
      );
      console.log("Verification Result:", isValid ? "Valid" : "Invalid");
      setVerificationResult(isValid ? "Valid" : "Invalid");
    } catch (error) {
      console.error("Error verifying the signature:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold mt-6">Verify Signature</div>
      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border border-grey-600 mt-0 rounded rounded-md pl-2 pt-1 mt-6 h-10"
      />
      <input
        type="text"
        placeholder="Enter signature"
        value={signature}
        onChange={(e) => setSignature(e.target.value)}
        className="border border-grey-600 mt-0 rounded rounded-md pl-2 pt-1 mt-6 h-10"
      />
      <input
        type="text"
        placeholder="Enter partner N"
        value={partnerN}
        onChange={(e) => setPartnerN(e.target.value)}
        className="border border-grey-600 mt-0 rounded rounded-md pl-2 pt-1 mt-6 h-10"
      />
      <input
        type="text"
        placeholder="Enter partner e"
        value={partnerE}
        onChange={(e) => setPartnerE(e.target.value)}
        className="border border-grey-600 mt-0 rounded rounded-md pl-2 pt-1 mt-6 h-10"
      />
      <button
        onClick={handleVerify}
        className="my-2 mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Verify
      </button>
    </div>
  );
};

export default VerifyForm;