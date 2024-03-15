import React, { useState } from 'react';
import questions from '../../data/questions.json'


const questionArray = [];

// const apiUrl = 'https://the-trivia-api.com/v2/questions?limit=10&categories=science,film_and_tv';

// fetch(questions)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(userData => {
//     // console.log(userData)
//     for (let index = 0; index < userData.length; index++) {
//       const { category, correctAnswer, incorrectAnswers, question } = userData[index]    
//       const questionInfo = {
//         category: category,
//         correctAnswer: correctAnswer,
//         choices: incorrectAnswers,
//         question: question.text
//       }
//       questionInfo.choices.push(correctAnswer)
    
//       questionArray.push( questionInfo )

//     }

//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// ;


    for (let index = 0; index < questions.length; index++) {
      const { category, correctAnswer, incorrectAnswers, question } = questions[index]    
      const questionInfo = {
        category: category,
        correctAnswer: correctAnswer,
        choices: incorrectAnswers,
        question: question.text
      }
      questionInfo.choices.push(correctAnswer)
    
      questionArray.push( questionInfo )

    }

const QuestionContent = ()=>{
  console.log(questionArray)
    return(
        <>
        <h1>This is the Question Content Component</h1>
        <h2>{questionArray[0].question}</h2>
        </>
    )

}

export default QuestionContent;

