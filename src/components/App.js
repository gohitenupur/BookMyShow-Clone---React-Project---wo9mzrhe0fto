import React from "react";
import "../styles/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Error from "./pages/Error";
// import Movies from "./pages/Movies";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/Register" element={<Register />} /> */}
        {/* <Route path="/movies" element={<Movies />} /> */}
      </Routes>
    </>
  );
};

export default App;
