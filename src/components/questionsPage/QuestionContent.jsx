import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QuestionContent = ({
  questionArray,
  setQuestionArray,
  result,
  setResult,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (questionArray.length === 0) {
      setTimeout(() => {
        navigate("/");
      }, 0);
    }
  }, [questionArray, navigate]);

  if (questionArray.length === 0) {
    return null;
  }

  //Count questions
  const [questionCount, setQuestionCount] = useState(0);

  //Capture the selected answers by their index, initialize with null value
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  //Spread the questions, choices and the corrent answers into an array
  const { question, choices, correctAnswer } = questionArray[questionCount];

  // Capture the result of scores, correct and incorrect answers
  const { score, correct, incorrect } = result;

  //Button next question will be clicked once the selected question is activated
  const nextQuestion = () => {

    //The choice captured will be alocated withing the variable selectedChoice
    const selectedChoice = choices[selectedAnswerIndex];
    
    //Count the questions
    if (questionCount !== questionArray.length - 1) {
      setQuestionCount((current) => current + 1);
    } else {
      //If there is no more questions reset the counter and take user to the results page
      setQuestionCount(0);
      navigate("/results-page");
    }
    
    //Adding scores to the results
    setResult((current) => ({
      ...current,
      //According to the current if correct add it as 1+ to the variable score / correct
      score: current.score + (selectedChoice === correctAnswer ? 1 : 0),
      correct: current.correct + (selectedChoice === correctAnswer ? 1 : 0),
       //According to the current if it is not correct add it as 1+ to the variable incorrect
      incorrect: current.incorrect + (selectedChoice !== correctAnswer ? 1 : 0),
    }));

    //Resets the function to null
    setSelectedAnswerIndex(null);
  };

  //Capture the selected answer by index and set it into the function
  const answerSelect = (index) => {
    setSelectedAnswerIndex(index);
  };

  const handleQuitQuiz = () => {
    setResult({
      score: 0,
      correct: 0,
      incorrect: 0,
    })
    setQuestionArray([])
    navigate("/")
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Quiz</h1>
      <h2 className="text-2xl font-bold bg-green-500 p-3 mt-5 rounded text-purple-950">
        {question}
      </h2>
      <ul className="flex gap-4 justify-center">
        {/* Iterate over the answers */}
        {choices.map((ele, index) => (
          <li
            onClick={() => answerSelect(index)}
            key={ele}

            // Change the style according to the option of the user 
            // If they click on the selected button, the, before hovered style, now remains fixed
            className={`${
              selectedAnswerIndex === index
                ? "bg-yellow-300 scale-110 rotate-3"
                : "bg-yellow-200"
            } font-bold p-3 rounded mt-3 transition duration-500 ease-in-out text-purple-900 hover:cursor-pointer hover:bg-yellow-300 hover:scale-110 hover:rotate-3`}
          >
            {ele}
          </li>
        ))}
      </ul>
      <button
      
        onClick={nextQuestion}
        className="bg-green-500 text-white py-2 px-8 rounded mt-5 mb-10"
      >
        {/*Clicking button next question to change questions forward */}
        {questionCount === questionArray.length - 1 ? "Finish" : "Next"}
      </button>
      <div className="mt-5">
        <button className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-orange-700 rounded-lg focus:outline-none  dark:bg-orange-600 ">
          Score:
          <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-gray-800 bg-orange-200 rounded-full">
            {score}
          </span>
        </button>{" "}
        <button className="inline-flex items-center px-3 py-1  text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:outline-none  dark:bg-green-600 ">
          Correct:
          <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-gray-800 bg-green-200 rounded-full">
            {correct}
          </span>
        </button>{" "}
        <button className="inline-flex items-center px-3 py-1  text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:outline-none  dark:bg-red-600 ">
          Incorrect:
          <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-gray-800 bg-red-200 rounded-full">
            {incorrect}
          </span>
        </button>
      </div>
      <div className="mt-5">
      <button className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-orange-700 rounded-lg focus:outline-none  dark:bg-orange-600 " onClick={handleQuitQuiz}>
          Quit quiz.
      </button>
      </div>
    </>
  );
};

export default QuestionContent;
