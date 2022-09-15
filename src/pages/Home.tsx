import React, {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const Home: React.FC = () => {
  const {auth} = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(()=> {
    if (!auth) navigate('../login')
  }, [auth])
  return (
    <>
    <h1>
      Hello User
    </h1>
    </>
  );
};

export default Home;
