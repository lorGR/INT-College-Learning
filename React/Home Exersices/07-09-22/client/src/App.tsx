import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./features/users/login";
import Register from "./features/users/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
