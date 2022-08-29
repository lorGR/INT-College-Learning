import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from "./features/Main/Main";
import Login from "./features/Forms/Login";
import Register from "./features/Forms/Register";

import './App.scss';

function App() {
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
