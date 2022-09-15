import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
