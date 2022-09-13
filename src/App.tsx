import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

type IAuthContext =  {
  auth: boolean;
  toggleAuth: () => void;
}

const [auth, setAuth] = useState(false)

const defaultState = {
  auth,
  toggleAuth: () => setAuth(!auth)
};

export const AuthContext = React.createContext<IAuthContext>(defaultState);
const App: React.FC = () => {
  return (
        <AuthContext.Provider value= {defaultState}>
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
          <Route path='/home' element={<Home />} />
      </Routes>
    </div>
        </AuthContext.Provider>
  );
}

export default App;
