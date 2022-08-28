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
          <div className="face front">
            <img src="https://thumbs.dreamstime.com/b/wooden-crate-front-view-cargo-box-texture-d-rendering-205221256.jpg" alt="box" />
          </div>
          <div className="face right">
          <img src="https://thumbs.dreamstime.com/b/wooden-crate-front-view-cargo-box-texture-d-rendering-205221256.jpg" alt="box" />
          </div>
          <div className="face back">
          <img src="https://thumbs.dreamstime.com/b/wooden-crate-front-view-cargo-box-texture-d-rendering-205221256.jpg" alt="box" />
          </div>
          <div className="face left">
          <img src="https://thumbs.dreamstime.com/b/wooden-crate-front-view-cargo-box-texture-d-rendering-205221256.jpg" alt="box" />
          </div>
          <div className="face top"><img src="https://thumbs.dreamstime.com/b/wooden-crate-front-view-cargo-box-texture-d-rendering-205221256.jpg" alt="box" /></div>
          <div className="face bottom">
          <img src="https://thumbs.dreamstime.com/b/wooden-crate-front-view-cargo-box-texture-d-rendering-205221256.jpg" alt="box" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
