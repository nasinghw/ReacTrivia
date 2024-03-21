import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../template/Header";

const HighScoresPage = () => {
  const navigate = useNavigate();
  // Fetch high scores from your database or use dummy data
  const highScores = [
    { username: "Player1", score: 20 },
    { username: "Player2", score: 17 },
    // Add more high scores here
  ];

  const handleGoHome = () => {
    navigate("/");
  };

  const handleClearScores = () => {
    localStorage.removeItem("highScores");
    // Reload the page or update state to reflect the change
    navigate("/highscores");
  };

  // Retrieve the user's high score from local storage
  const userHighScore = parseInt(localStorage.getItem("userScore")) || 0;

  // Retrieve high scores from local storage
  const highScoresFromLocalStorage =
    JSON.parse(localStorage.getItem("highScores")) || [];

  return (
    <>
      <div>
        <h2 className="mt-10 text-xl text-zync-100 mb-5">High Scores</h2>
        <ul>
          {highScores.map((score, index) => (
            <li key={index}>
              {score.username}: {score.score}
            </li>
          ))}
        </ul>
        {/* <p>Your High Score: {userHighScore}</p> */}

        {/* Display high scores from local storage */}
        {/* <h3>High Scores from Local Storage:</h3> */}
        <ul>
          {highScoresFromLocalStorage.map((score, index) => (
            <li key={index}>
              {score.userName}: {score.userScore}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col px-5 gap-2 mt-20 sm:flex-row md:gap-2">
        <button
          className="mt-4 w-full sm:w-30 bg-amber-500 hover:bg-amber-400 text-sm text-white py-2 px-4 rounded"
          type="button"
          onClick={handleGoHome}
        >
          Go home.
        </button>

        <button
          className="mt-4 w-full bg-red-500 hover:bg-red-400 text-sm text-white py-2 px-4 rounded"
          type="button"
          onClick={handleClearScores}
        >
          Clear Scores
        </button>
      </div>
    </>
  );
};

export default HighScoresPage;
