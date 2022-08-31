import { useState } from 'react';


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Main from "./features/Main/Main";
import Login from "./features/Forms/Login";
import Register from "./features/Forms/Register";

import './App.scss';
import SecretsContainer from './features/Secrets/SecretsContainer';

export interface User {
  email: string,
  username: string,
  password: string,
  id: string
}

function App() {
  
  const [usersList, setUsersList] = useState<User[]>([]);
  const addUser = (user: User) => {
    setUsersList(prevState => ([...prevState,user]));
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login usersList={usersList}/>} />
          <Route path="/register" element={<Register usersList={usersList} onSubmit={addUser} />} />
          <Route path="/user/:userId" element={<SecretsContainer usersList={usersList}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
