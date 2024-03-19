import React, { useEffect } from 'react'; 
import Description from '../components/landingPage/Description';
import FloatingIcons from '../components/landingPage/FloatingIcons';
import { Link } from 'react-router-dom';
// import Button from '../template/Button';
// import Header from '../template/Header';
// import Footer from '../template/Footer';
// import FloatingIcons from '../components/landingPage/FloatingIcons';

const LandingPage = ({ setResult }) => {

    const resetResults = () => {
        setResult({
            score: 0,
            correct: 0,
            incorrect: 0,
        })
    }

    return (
        <>
            <FloatingIcons />
            <Description />
            {/* Temporary Placeholder Buttons */}
            {/* TODO: Link Template Buttons once ready */}
            <div className='btn-container'>
                <Link to="/user-form">
                    <button className="btn-primary" onClick={resetResults}>Start a Quiz</button>
                </Link>
                <Link to="/highscores">
                    <button className="btn-primary">Highscores</button>
                </Link>
            </div>
        </>
    );
};

export default LandingPage;