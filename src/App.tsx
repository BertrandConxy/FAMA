import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

type AuthContext = {
  auth: boolean;
  toggleAuth: () => void,
};

const defaultValue:AuthContext = {
  auth: false,
  toggleAuth: () => undefined,
}

export const AuthContext = createContext<AuthContext>({ ...defaultValue });

const App: React.FC = () => {
  const [auth, setAuth] = useState(false);
  const toggleAuth = ()=> setAuth(!auth);
  return (
    <div>
      <AuthContext.Provider value={{ auth, toggleAuth }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
