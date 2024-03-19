import React, { useEffect } from 'react'; 
import Description from '../components/landingPage/Description';
import { Link } from 'react-router-dom';
// import FloatingIcons from '../template/FloatingIcons';
// import Button from '../template/Button';
// import Header from '../template/Header';
// import Footer from '../template/Footer';

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
           
            <Description />
            <div className='btn-container'>
                <Link to="/user-form">
                    <button className="btn-primary" onClick={resetResults}>Start a Quiz</button>
                </Link>
                <Link to="/highscores">
                    <button>Highscores</button>
                </Link>
            </div>
        </>
    );
};

export default LandingPage;