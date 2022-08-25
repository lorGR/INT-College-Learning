import React, { useState } from 'react';
import './App.css';

function App() {
  const [boxWidth, setBoxWidth] = useState("400px");
  const [boxRotation, setBoxRotation] = useState("rotate(0deg)");
  const [boxRotateY, setBoxRotateY] = useState("rotateY(0deg)");
  const [boxRotateX, setBoxRotateX] = useState("rotateX(0deg)");

  const handleRotation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxRotation(`rotate(${e.target.value}deg)`);
  }
  const handleRotateY = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxRotateY(`rotateY(${e.target.value}deg)`);
  }
  const handleRotateX = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxRotateX(`rotateX(${e.target.value}deg)`);
  }

  const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoxWidth(`${e.target.value}px`);
  }

  return (
    <div className="App">
      <label htmlFor="sizeBox">Width</label>
      <input type="range" name="sizeBox" id="size" onChange={handleSize} min="400" max="800"/>

      <label htmlFor="rotateY">Rotate On Y axis:</label>
      <input type="range" name="rotateY" id="rotateY" onChange={handleRotateY} min="0" max="360"/>

      <label htmlFor="rotateY">Rotate On X axis:</label>
      <input type="range" name="rotateY" id="rotateY" onChange={handleRotateX} min="0" max="360"/>

      <label htmlFor="rotationBox">Rotation:</label>
      <input type="range" name='rotationBox' id='rotation' onChange={handleRotation} min="0" max="360"/>

      <div className='myBox' style={{width: boxWidth, height: boxWidth, transform: boxRotation  }}></div>
    </div>
  );
}

export default App;
