import React, { useState } from "react";
import Status from "./Status";

function App() {
  let [messages, setMessages] = useState(["test", "test2"]);

  return (
    <div>
      <ul>
        <Status onEnter={(value) => setMessage()} />
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  );
}
x;
export default App;
