import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage.jsx'
import QuestionsPage from './pages/QuestionsPage.jsx'



function App() {

  return (
 <>
 <QuestionsPage />
 <LandingPage  />
 </>
  )
}

export default App;
