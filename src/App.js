import React, { useState } from "react";
import "./App.css";

function App() {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClick = () => {
    setIsAnimated(true);
    setTimeout(() => setIsAnimated(false), 700);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <p>
          This is a beautifully styled React application. Edit{" "}
          <code>src/App.js</code> and save to reload.
        </p>
        <p>Start building your amazing application now!</p>
        <button
          className={`btn ${isAnimated ? "btn-animated" : ""}`}
          onClick={handleClick}
        >
          Get Started
        </button>
      </header>
    </div>
  );
}

export default App;
