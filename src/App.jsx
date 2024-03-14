import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
