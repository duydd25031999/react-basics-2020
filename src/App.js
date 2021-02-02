import React from "react";
import Setup from "./tutorial/1-useState/setup/5-useState-counter";
import Final from "./tutorial/1-useState/final/5-useState-counter";

function App() {
  // App component = class Main
  return (
    <div className="container">
      <Setup />
      <p style={{ background: "red", width: "100%", height: '5px' }}></p>
      <Final />
    </div>
  );
}

export default App;
