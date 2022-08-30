import { useState } from 'react';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from "./features/Main/Main";
import Login from "./features/Forms/Login";
import Register from "./features/Forms/Register";

import './App.scss';

export interface User {
  email: string,
  username: string,
  password: string,
  id: string
}

function App() {
  const { v4: uuidv4 } = require('uuid');
  const [usersList, setUsersList] = useState<User[]>([]);
  const getUserData = (user: User) => {
    const existUser = usersList.find(userInList => userInList.email === user.email);
    if(existUser) {
      console.log("Username is already exist");
    }
    setUsersList(prevState => ([
      ...prevState,
      {username: user.username, email: user.email, password: user.password, id: uuidv4()}
    ]));
    console.log(usersList);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register onSubmit={getUserData}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
