import React, { useState, useEffect } from 'react';
import questions from '../../data/questions.json'



const QuestionContent = ({ questionArray, setQuestionArray, result, setResult})=>{
  const [questionCount, setQuestionCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const { question, choices, correctAnswer } = questionArray[questionCount]

  const nextQuestion = () => {
    setQuestionCount((current) => current + 1)
    setResult((current) => 
    selectedAnswer ? {
      ...current,
      score: current.score + 1,
      correct: current.correct + 1,
    } : {
      ...current,
      incorrect: current.incorrect + 1,
    })
    console.log(result)
  }

  const answerSelect = (answer) => {
    answer === correctAnswer ? setSelectedAnswer(true) : setSelectedAnswer(false)
  }

  return(
      <>
      <h1>Quiz</h1>
      <h2>{question}</h2>
      <ul>
        {choices.map((ele) => (
          <li onClick={() => answerSelect(ele)} key={ele}>{ele}</li>
        ))}
      </ul>
      <button onClick={nextQuestion}>Next</button>
      </>
  )
}

export default QuestionContent;

