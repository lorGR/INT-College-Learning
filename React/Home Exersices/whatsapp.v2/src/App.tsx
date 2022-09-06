import { useState } from 'react';
import './App.scss';

import Screen from './features/Screen/Screen';
import Form from "./features/Form/Form";

export interface Message {
  message: string,
  dateTime: string
}

function App() {
  const [ messages, setMessages] = useState<Message[]>([]);
  const handleGetData = (message: Message) => {
    try {
      setMessages(prevState => ([...prevState,message]));
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <Screen messages={messages}/>
      <Form sendData={handleGetData}/>
    </div>
  );
}

export default App;
