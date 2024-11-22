import React, { useState } from "react";
import { signMessage } from "../api";

const SignForm = ({ setSignature }) => {
  const [message, setMessage] = useState("");

  const handleSign = async () => {
    try {
      const signature = await signMessage(message);
      console.log("Generated Signature:", signature);
      setSignature(signature);
    } catch (error) {
      console.error("Error signing the message:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="text-2xl font-bold py-2">Sign Message</div>
        <input
          type="text"
          placeholder="Enter message to sign"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-grey-600 mt-0 rounded rounded-md pl-2 pt-1 mt-6 h-10"
        />
        <button
          className="my-2 mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={handleSign}
        >
          Sign
        </button>
      </div>
    </div>
  );
};

export default SignForm;