import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';


const Home: React.FC = () => {
const navigate = useNavigate();
const {auth} = useContext(AuthContext);

if(!auth) {
    navigate('./login')
    return null
} else {

    return (
        <h1>Home page</h1>
    );
}
}

export default Home;