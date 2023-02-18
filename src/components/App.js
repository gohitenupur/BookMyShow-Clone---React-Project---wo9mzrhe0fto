import React from "react";
import "../styles/App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleMovie from "./pages/SingleMovie";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
