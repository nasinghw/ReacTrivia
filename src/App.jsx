import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage.jsx'

const questionArray = [
];


const apiUrl = 'https://the-trivia-api.com/v2/questions?limit=10&categories=science,film_and_tv';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    for (let index = 0; index < userData.length; index++) {
      const { category, correctAnswer, incorrectAnswers, question } = userData[index]    
      const questionInfo = {
        category: category,
        correctAnswer: correctAnswer,
        incorrectAnswers: incorrectAnswers,
        question: question
      }
      questionArray.push( questionInfo )

    }

    console.log(questionArray)
  })
  .catch(error => {
    console.error('Error:', error);
  });


function App() {

  return (
 <>
 <LandingPage/>
 </>
  )
}

export default App;
