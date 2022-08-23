import { useState } from 'react';

import './App.scss';
import SignIn from './features/signIn';
import SignUp from './features/signUp';

export interface User {
  username: string,
  password: string
  id: string
}

function App() {
  const [ usersList, setUsersList ] = useState<User[]>([]);
  

  return (
    <div className="App container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
