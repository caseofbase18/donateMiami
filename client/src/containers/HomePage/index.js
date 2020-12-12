import React from 'react';
import { Link } from 'react-router-dom';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FooterSmall from '../../components/FooterSmall';

const HomePage = () => {
    return <div>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Header />
        </div>


        <p id="homepage">
            <button id="homebutton"><Link to="/login" style={{color: 'white'}}> Login </Link></button>
            <button id="homebutton"><Link to="/signup" style={{color: 'white'}}> Sign up </Link></button>
        </p>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <FooterSmall />
        </div>

    </div>
}
export default HomePage;