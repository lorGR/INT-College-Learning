import { useState } from 'react';
import './App.css';
import Circle from './features/Circle/Circle';

function App() {
  const [backgroundColor, setBackgroundColor] = useState<string>('white');
  return (
    <div className="App" style={{background: backgroundColor}}>
      <Circle color='red' setBackgroundColor={setBackgroundColor} />
      <Circle color='blue' setBackgroundColor={setBackgroundColor} />
      <Circle color='orange' setBackgroundColor={setBackgroundColor} />
      <Circle color='green' setBackgroundColor={setBackgroundColor} />
    </div>
  );
}

export default App;
