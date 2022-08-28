import React, { useState } from 'react';
import './App.css';

function App() {

  const [cubeRotation, setCubeRotation] = useState("");
  const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCubeRotation(`rotateX(${e.target.value}deg) rotateY(${e.target.value}deg)`);
  }

  return (
    <div className="App">
      <label htmlFor="cubeRotation">Rotation:</label>
      <input onChange={handleChnage} type="range" name="cubeRotation" id="cubeRotation" min="0" max="360" />
      <div className="container">
        <div className="cube" style={{transform: cubeRotation}}>
          <div className="face front">1</div>
          <div className="face right">2</div>
          <div className="face back">3</div>
          <div className="face left">4</div>
          <div className="face top">5</div>
          <div className="face bottom">6</div>
        </div>
      </div>
    </div>
  );
}

export default App;
