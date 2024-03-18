import React, { useState, useEffect } from 'react';
import questions from '../../data/questions.json'



const QuestionContent = ({ questionArray, setQuestionArray })=>{
  const [questionCount, setQuestionCount] = useState(0);
  return(
      <>
      <h1>This is the Question Content Component</h1>
      <h2>{questionArray[questionCount].question}</h2>
      </>
  )
}

export default QuestionContent;

