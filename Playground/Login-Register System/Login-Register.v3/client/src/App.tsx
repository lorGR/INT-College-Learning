import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';
import Home from "./features/home/Home";
import SignIn from "./features/sign-in/SignIn";
import SignUp from "./features/sign-up/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
