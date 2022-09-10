import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Register from "./features/users/register";
import { MainPage } from './features/users/register/store/mainPage/MainPage';
import { AddSet } from './features/users/register/store/addSet/AddSet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/main" element={<MainPage />}/>
        <Route path="/addSet" element={<AddSet />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
