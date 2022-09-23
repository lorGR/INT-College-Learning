import React from "react";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./features/products/Products";
import SetProduct from "./features/admin/setProduct/SetProduct";
import Chat from "./features/messages/chat/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add-product" element={<SetProduct />}/>
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
