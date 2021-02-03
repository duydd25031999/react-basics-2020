import React from "react";
import Setup from "./tutorial/11-react-router/setup/index";
import Final from "./tutorial/11-react-router/final/index";

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
