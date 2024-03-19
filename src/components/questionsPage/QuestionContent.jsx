import React, { useState, useEffect } from "react";

const QuestionContent = () => {
  //The questions from the API will be stored in "questionArray"
  const [questionArray, setQuestionArray] = useState([]);

  //The current item from the array will be stored in "theCurrentQuestion"
  const [theCurrentQuestion, setTheCurrentQuestion] = useState(0);

  //The useEffect will run the fetch of the API asynchronously
  useEffect(() => {
    //Create the function to fetch the API
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "https://the-trivia-api.com/v2/questions?limit=10&categories=science,film_and_tv"
        );

        //Capture the error in case the fetch is not successfull
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        //Store the information from the API in "data"
        const data = await response.json();

        //Change the array of questions through the function setQuestionArray
        setQuestionArray(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    //Call the function
    fetchQuestions();
  }, []); // Leave the array empty to make sure it will run only once

  //Function to advance to the next Question
  const handleNext = () => {
    setTheCurrentQuestion((prevIndex) => prevIndex + 1);
  };

  //Function to go to the previous Question
  //There is a need to create condition to this button to appear only when the next question is triggered
  const handlePrevious = () => {
    setTheCurrentQuestion((prevIndex) => prevIndex - 1);
  };

  // Render loading message if questions are not fetched yet
  if (questionArray.length === 0) {
    return <div>Loading...</div>;
  }

  // Get the current question based on the current index
  const currentQuestion = questionArray[theCurrentQuestion];

  return (
    <>
      <hr />
      <h5>This is the Question Content Component</h5>
      {/* Temporary title to identify the component */}
      <hr />
      <h2>{currentQuestion.question.text}</h2>
      <ul>
        {currentQuestion.incorrectAnswers.map((choice) => (
          <li key={choice}>{choice}</li>
        ))}
        <li key={currentQuestion.correctAnswer}>
          {currentQuestion.correctAnswer}
        </li>
      </ul>
      <button onClick={handlePrevious}>Previous Question</button>
      <button onClick={handleNext}>Next Question</button>
    </>
  );
};

export default QuestionContent;
