import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const handleKeyUp = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  } 
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={handleKeyUp}/>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
