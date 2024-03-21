import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import QuestionsPage from './pages/QuestionsPage.jsx'
import UserFormPage from './pages/UserFormPage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import FloatingIcons from './template/FloatingIcons.jsx';
import Header from './template/Header.jsx';
import HighScoresPage from './pages/HighScoresPage';
import LoadingPage from './pages/LoadingPage.jsx';

function App() {

  const [questionArray, setQuestionArray] = useState([]);

  const [result, setResult] = useState({
    score: 0,
    correct: 0,
    incorrect: 0,
  })
  
  return (

  <Router>

    <FloatingIcons />
    <Header />
    <Routes >
      <Route  index element={<LoadingPage/>} />
      <Route  path='home' element={<LandingPage  setResult ={setResult}/>} />
      <Route  path='questions-page' element={<QuestionsPage questionArray={questionArray} setQuestionArray={setQuestionArray} result={result} setResult ={setResult}/>} />
      <Route  path='user-form' element={<UserFormPage setQuestionArray={setQuestionArray} />} />
      <Route  path='results-page' element={<ResultsPage questionArray={questionArray} result={result}/>} />
      <Route path='highscores' element={<HighScoresPage />} />
    </Routes>
  </Router>

  )
}

export default App;
