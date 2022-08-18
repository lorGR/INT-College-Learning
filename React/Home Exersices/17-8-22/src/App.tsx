import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Main from "./views/pages/main/main";

import './App.scss';
import Home from "./views/pages/home/Home";
import Cart from "./views/pages/cart/Cart";
import Profile from "./views/pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
