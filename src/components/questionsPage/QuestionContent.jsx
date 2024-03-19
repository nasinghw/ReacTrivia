import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../../data/questions.json'



const QuestionContent = ({ questionArray, setQuestionArray, result, setResult})=>{
  const navigate = useNavigate();
  
  useEffect(() => {
    if (questionArray.length === 0) {
      setTimeout(() => {
        navigate('/');
      }, 0);
    }
  }, [questionArray, navigate]);

  if (questionArray.length === 0) {
    return null;
  }

  const [questionCount, setQuestionCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const { question, choices, correctAnswer } = questionArray[questionCount];
  const { score, correct, incorrect } = result;

  const nextQuestion = () => {
    if (questionCount !== questionArray.length - 1){
    setQuestionCount((current) => current + 1)
    } else {
      navigate('/results-page')
    }
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
      <button onClick={nextQuestion}>{questionCount === questionArray.length - 1 ? 'Finish' : 'Next'}</button>
      <h3>Score:{score} Correct:{correct} Incorrect: {incorrect}</h3>
      </>
  )
}

export default QuestionContent;

