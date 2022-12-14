import { useState } from 'react';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from "./features/Main/Main";
import Login from "./features/Forms/Login";
import Register from "./features/Forms/Register";
import SecretsContainer from './features/Secrets/SecretsContainer';
import Secret from './features/Secrets/SecretGame';

import './App.scss';
import SecretGame from './features/Secrets/SecretGame';

export interface User {
  email: string,
  username: string,
  password: string,
  id: string
}

export interface Secret {
  id: string,
  statements: Array<Statement>,
  title: string
}

interface Statement {
  id: string,
  statement: string,
  isTrue: boolean
}

const secrets: Array<Secret> = [
  {
    id: "1",
    title: "Secret 1",
    statements: [
      {
        id: "1-1",
        statement: "When I was 4 years old my hair was blond",
        isTrue: false,
      },
      {
        id: "1-2",
        statement: "I am 23 years old with black hair",
        isTrue: true
      },
      {
        id: "1-3",
        statement: "When I was 18 years old my hair was blond",
        isTrue: true
      }
    ]
  },
  {
    id: "2",
    title: "Secret 2",
    statements: [
      {
        id: "2-1",
        statement: "When I was younger I wanted to be a lawyer",
        isTrue: true,
      },
      {
        id: "2-2",
        statement: "I had two earrings in my ears",
        isTrue: true
      },
      {
        id: "2-3",
        statement: "I have two tattos",
        isTrue: false
      }
    ]
  },
  {
    id: "3",
    title: "Secret 3",
    statements: [
      {
        id: "3-1",
        statement: "I almost lost my right eye in third grade",
        isTrue: true,
      },
      {
        id: "3-2",
        statement: "I almost broke my right arm in third grade",
        isTrue: false
      },
      {
        id: "3-3",
        statement: "When I was born I had a lack of oxygen",
        isTrue: true
      }
    ]
  },
]

function App() {

  const [usersList, setUsersList] = useState<User[]>([]);
  const addUser = (user: User) => {
    setUsersList(prevState => ([...prevState, user]));
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login usersList={usersList} />} />
          <Route path="/register" element={<Register usersList={usersList} onSubmit={addUser} />} />
          <Route path="/user/:userId" element={<SecretsContainer usersList={usersList} secrets={secrets} />} />
          <Route path="user/:userId/:secretId" element={<SecretGame secrets={secrets} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
