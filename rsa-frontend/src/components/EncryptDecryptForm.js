import React, { useState } from "react";
import { encryptMessage, decryptMessage } from "../api";

const EncryptDecryptForm = ({ setMessageOutput }) => {
  const [message, setMessage] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(true);
  const [N, setN] = useState("");
  const [encryptKey, setEncryptKey] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const result = isEncrypt
        ? await encryptMessage(message, N, encryptKey)
        : await decryptMessage(message);
      setMessageOutput(result);
    } catch (error) {
      setMessageOutput("Error processing message");
      console.log(error);
    }
  };

  return (
    <div>

      <div className="flex flex-row justify-between">

      <h2 className="p-4 font-bold text-lg">{isEncrypt ? "Encrypt" : "Decrypt"} Message</h2>

      <button onClick={() => setIsEncrypt(!isEncrypt)} className="m-4 bg-blue-500 text-white font-semibold p-2 rounded-lg shadow-md transition-all duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Switch to {isEncrypt ? "Decrypt" : "Encrypt"}
      </button>

    
      </div>

      <form onSubmit={handleSubmit} className="form-container flex flex-col">
        <textarea
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here..."
          className="border border-grey-600 m-4 mt-0 rounded rounded-md pl-2 pt-1"
        />

        {isEncrypt && (
          <input
            type="text"
            value={N}
            onChange={(e) => setN(e.target.value)}
            placeholder="Enter N"
            required
            className="border border-grey-600 h-8 m-4 rounded rounded-md pl-2"
          />
        )}

        {isEncrypt && (
          <input
            type="text"
            value={encryptKey}
            onChange={(e) => setEncryptKey(e.target.value)}
            placeholder="Enter e"
            required
            className="border border-grey-600 h-8 m-4 rounded rounded-md pl-2"
          />
        )}

        <button
          type="submit"
          className="m-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {isEncrypt ? "Encrypt" : "Decrypt"}
        </button>
      </form>
    </div>
  );
};

export default EncryptDecryptForm;