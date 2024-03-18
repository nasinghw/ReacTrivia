import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './pages/tempNavBar.jsx'
import LandingPage from './pages/LandingPage.jsx'
import QuestionsPage from './pages/QuestionsPage.jsx'




function App() {

  return (
 <Router>

  <Layout/>
    <Routes>
      <Route index element={<LandingPage  />} />
      <Route  path='questions-page' element={<QuestionsPage />} />
    </Routes>
 </Router>
  )
}

export default App;
