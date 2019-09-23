import React from "react";
import "./App.css";
import MessageWindow from "./Messages/MessageWindow/MessageWindow";


const App: React.FC = () => {
  return (
    <div className="App">
      <MessageWindow />
    </div>
  );
};

export default App;
