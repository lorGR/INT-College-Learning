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

interface User {
  email: string,
  username: string,
  password: string
}

function App() {
  const [usersList, setUsersList] = useState<User[]>([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
