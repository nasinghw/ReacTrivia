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
    });
    setQuestionArray([]);
    navigate("/");
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Quiz</h1>
      <h2 className="text-2xl font-bold bg-green-500 p-3 mt-5 rounded text-purple-950">
        {question}
      </h2>
      <ul className="flex flex-col gap-2 justify-center md:flex-row sm:gap-4 md:gap-2">
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
            } font-bold p-3 rounded mt-3 transition duration-500 ease-in-out text-purple-900 hover:cursor-pointer hover:bg-yellow-300 hover:scale-110 hover:rotate-3 w-full md:w-fit answer-hover-even-rotation`}
          >
            {ele}
          </li>
        ))}
      </ul>
      <button
        onClick={nextQuestion}
        className="bg-green-500 text-white py-2 px-8 rounded mt-5 mb-10 w-full md:w-auto"
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
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-amber-600 hover:bg-amber-500 rounded focus:outline-none  dark:bg-orange-600 "
          onClick={handleQuitQuiz}
        >
          QUIT QUIZ
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default QuestionContent;
