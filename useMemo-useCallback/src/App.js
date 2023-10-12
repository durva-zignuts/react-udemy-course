import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagh, setShowParagh] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParahandler = useCallback(() => {
    if (allowToggle) {
      setShowParagh((prev) => !prev);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagh} />
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button onClick={toggleParahandler}>Toggle Para</Button>
    </div>
  );
}

export default App;
