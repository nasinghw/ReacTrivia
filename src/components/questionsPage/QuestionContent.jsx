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

  const [questionCount, setQuestionCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { question, choices, correctAnswer } = questionArray[questionCount];
  const { score, correct, incorrect } = result;
  let btnStyle = false;

  const nextQuestion = () => {
    if (questionCount !== questionArray.length - 1) {
      setQuestionCount((current) => current + 1);
    } else {
      setQuestionCount(0);
      navigate("/results-page");
    }
    setResult((current) =>
      selectedAnswer
        ? {
            ...current,
            score: current.score + 1,
            correct: current.correct + 1,
          }
        : {
            ...current,
            incorrect: current.incorrect + 1,
          }
    );
    console.log(result);
  };

  const answerSelect = (answer) => {
    btnStyle = true;
    answer === correctAnswer
      ? setSelectedAnswer(true)
      : setSelectedAnswer(false);
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Quiz</h1>
      <h2 className="text-2xl font-bold bg-green-500 p-3 mt-5 rounded text-purple-950">
        {question}
      </h2>
      <ul className="flex gap-4 justify-center">
        {choices.map((ele) => (
          <li
            onClick={() => answerSelect(ele)}
            key={ele}
            className="bg-yellow-200 font-bold p-3 rounded mt-3 transition duration-500 ease-in-out text-purple-900 hover:cursor-pointer hover:bg-yellow-300 hover:scale-110 hover:rotate-3"
          >
            {ele}
          </li>
        ))}
      </ul>
      <button
        onClick={nextQuestion}
        className="bg-green-500 text-white py-2 px-8 rounded mt-5 mb-10"
      >
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
    </>
  );
};

export default QuestionContent;
