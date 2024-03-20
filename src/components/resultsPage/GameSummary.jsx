import React from "react";
import { Link } from "react-router-dom";

const GameSummary = ({ questionArray, result }) => {
  const { score, correct, incorrect } = result;
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const highScoreArray = JSON.parse(localStorage.getItem("highScores")) || [];
    const highScoreData = {
      userName: event.target.userName.value,
      userScore: score,
    };
    highScoreArray.push(highScoreData);
    localStorage.setItem("highScores", JSON.stringify(highScoreArray));
  };

  return (
    <div className="game-summary flex flex-col justify-center items-center py-10 mt-10 rounded-lg ">
      <h2 className="text-xl text-purple-950 font-bold ">Game Summary</h2>
      <ul className="flex flex-col justify-end items-end rounded-lg">
        <li className="inline-flex  shadow-sm w-full justify-between bg-slate-200 rounded-t-lg">
          <span className="py-3 px-5 bg-blue-400 rounded-tl-lg text-purple-950 font-bold">
            Score:
          </span>
          <span className="py-3 px-5 text-right bg-slate-200 rounded-tr-lg text-purple-950">
            {score} out of {questionArray.length}
          </span>
        </li>
        <li className="inline-flex  shadow-sm w-full justify-between bg-slate-200">
          <span className="py-3 px-5 bg-green-400 text-purple-950 font-bold">
            Correct Answers:
          </span>{" "}
          <span className="py-3 px-5 bg-slate-200 text-purple-950">
            {correct} out of {questionArray.length}
          </span>
        </li>
        <li className="inline-flex  shadow-sm w-full justify-between bg-slate-200 rounded-b-lg">
          <span className="py-3 px-5 bg-red-400 text-purple-950 rounded-bl-lg font-bold">
            Incorrect Answers:
          </span>
          <span className="py-3 px-5 bg-slate-200 rounded-br-lg text-purple-950">
            {" "}
            {incorrect} out of {questionArray.length}
          </span>
        </li>
      </ul>
      <form onSubmit={handleFormSubmit} className="border-red">
        <input type="text" name="userName" placeholder="Your Name Here"></input>
        <button className="btn-primary" type="submit">
          Submit!
        </button>
      </form>
      <Link to="/" className="border-red">
        <button className="btn-primary btn-primary btn-primary flex items-center justify-center rounded-full py-2 px-4 mx-2 hover:bg-yellow-300 w-40 shadow-sm hover:shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 active:scale-95">
          Go home
        </button>
      </Link>
    </div>
  );
};

export default GameSummary;
