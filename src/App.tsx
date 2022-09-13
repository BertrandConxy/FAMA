import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
