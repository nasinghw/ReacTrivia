import React, { useEffect } from 'react'; 
import Description from '../components/landingPage/Description';
import FloatingIcons from '../components/landingPage/FloatingIcons';
import { Link } from 'react-router-dom';
// import Button from '../template/Button';
// import Header from '../template/Header';
// import Footer from '../template/Footer';
// import FloatingIcons from '../components/landingPage/FloatingIcons';

const LandingPage = () => {
    return (
        <>
            <FloatingIcons />
            <Description />
            {/* Temporary Placeholder Buttons */}
            {/* TODO: Link Template Buttons once ready */}
            <div className='btn-container'>
                <Link to="/user-form">
                    <button className="btn-primary">Start a Quiz</button>
                </Link>
                <Link to="/highscores">
                    <button>Highscores</button>
                </Link>
            </div>
        </>
    );
};

export default LandingPage;