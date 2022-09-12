import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Login/>
      <SignUp/>
    </div>
  )
}

export default App;
