import React from 'react'; 
import Description from '../components/landingPage/Description';
import FloatingIcons from '../components/landingPage/FloatingIcons';
// import Button from '../template/Button';
// import Header from '../template/Header';
// import Footer from '../template/Footer';
// import FloatingIcons from '../components/landingPage/FloatingIcons';

const LandingPage = () => {
    return(
 <>
<FloatingIcons />
 <Description />
 {/* Temporary Placeholder Buttons */}
 {/* TODO: Link Template Buttons once ready */}
 <div className='btn-container'>
 <button className="btn-primary" href="" >Start a Quiz</button>
 <button>Highscores</button>
 </div>

 
 </>
)};

export default LandingPage;