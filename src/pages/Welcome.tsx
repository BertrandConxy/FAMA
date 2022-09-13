import React from "react";
import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  return (
    <>
      <h2>Welcome</h2>
      <Link to="/login">Get started</Link>
    </>
  );
};

export default Welcome;
