import React from "react";
import ChatRoom from "./ChatRoom";

const App = () => {
  const username = prompt("Enter your username:") || "Anonymous";
  return (
    <div>
      <ChatRoom username={username} />
    </div>
  );
};

export default App;
//node --loader ts-node/esm server.ts\
