import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const HighScoresPage = () => {
  const navigate = useNavigate();
  // Fetch high scores from your database or use dummy data
  const highScores = [
    { username: 'Player1', score: 20 },
    { username: 'Player2', score: 17 },
    // Add more high scores here
  ];

  const handleGoHome = () => {
    navigate("/");
  };

  const handleClearScores = () => {
    
    localStorage.removeItem('highScores');
    // Reload the page or update state to reflect the change
    window.location.reload();
  };

  // Retrieve the user's high score from local storage
  const userHighScore = parseInt(localStorage.getItem('userScore')) || 0;

  // Retrieve high scores from local storage
  const highScoresFromLocalStorage = JSON.parse(localStorage.getItem('highScores')) || [];

  return (
    <>

      <div>
        <h2>High Scores</h2>
        <ul>
          {highScores.map((score, index) => (
            <li key={index}>
              {score.username}: {score.score}
            </li>
          ))}
        </ul>
        <p>Your High Score: {userHighScore}</p>

        {/* Display high scores from local storage */}
        <h3>High Scores from Local Storage:</h3>
        <ul>
          {highScoresFromLocalStorage.map((score, index) => (
            <li key={index}>
              {score.userName}: {score.userScore}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className="mt-4 w-full bg-amber-700 hover:bg-orange-400 text-sm text-white py-2 px-4 rounded"
          type="button"
          onClick={handleGoHome}
        >
          Go home.
        </button>
        <button
          className="mt-2 w-full bg-red-500 hover:bg-red-400 text-sm text-white py-2 px-4 rounded"
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
