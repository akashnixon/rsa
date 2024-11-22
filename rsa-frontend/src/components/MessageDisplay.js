import React from "react";

const MessageDisplay = ({ messageOutput }) => (
  <div>
    <div className='m-4 font-bold text-lg'>Output</div>
    <div className='m-4'>
      {Array.isArray(messageOutput)
        ? `[${messageOutput.join(", ")}]`
        : messageOutput}
    </div>
  </div>
);

export default MessageDisplay;