import React, {useContext} from "react";
import { AuthContext } from "../App";

const Home: React.FC = () => {
  const {auth, toggleAuth} = useContext(AuthContext);
  return (
    <>
    <h1>
      Hello <span>{`${auth}`}</span>{" "}
    </h1>
    <button  onClick={
      () => toggleAuth()
    } >Click</button>
    </>
  );
};

export default Home;
