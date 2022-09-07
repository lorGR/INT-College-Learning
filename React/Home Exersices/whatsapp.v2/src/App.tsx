import { useState } from 'react';
import './App.scss';

import Screen from './features/Screen/Screen';
import Form from "./features/Form/Form";

export interface Message {
  message: string,
  dateTime: string,
  otherUser: boolean
}

function App() {
  const [ messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    try {
      setMessages(prevMessages => ([...prevMessages,message]));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <Screen messages={messages}/>
      <Form sendData={addMessage}/>
    </div>
  );
}

export default App;
