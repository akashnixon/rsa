import React from 'react';

const MessageDisplay = ({ messageOutput }) => (
  <div>
    <h2>Output</h2>
    <p>
      {Array.isArray(messageOutput) ? `[${messageOutput.join(", ")}]` : messageOutput}
    </p>
  </div>
);

export default MessageDisplay;
