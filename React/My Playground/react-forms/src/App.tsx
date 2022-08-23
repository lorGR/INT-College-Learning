import { useState } from 'react';

import './App.scss';
import SignIn from './features/signIn';
import SignUp from './features/signUp';

export interface User {
  username: string | undefined,
  password: string | undefined,
  id: string | undefined
}

function App() {
  const [usersList, setUsersList] = useState<User[]>([]);

  const getUserData = (user:User) => {
    try {
      setUsersList(prevState => {
        return ([...prevState, {username: user.username, password: user.password, id: user.id}])
      })
    } catch (error) {

    }
  }

  return (
    <div className="App container">
      <SignIn />
      <SignUp onSubmit={getUserData} />
    </div>
  );
}

export default App;
