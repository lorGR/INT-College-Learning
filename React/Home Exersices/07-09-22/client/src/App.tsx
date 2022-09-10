import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./features/users/login";
import Register from "./features/users/register";
import { MainPage } from './features/store/mainPage/MainPage';
import { AddSet } from './features/store/addSet/AddSet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/main/:userId" element={<MainPage />}/>
        <Route path="/addSet" element={<AddSet />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
