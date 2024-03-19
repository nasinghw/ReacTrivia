import React, { useState, useEffect } from 'react';

const HighScoresPage = () => {
  // Fetch high scores from your database or use dummy data
  const highScores = [
    { username: 'Player1', score: 20 },
    { username: 'Player2', score: 17 },
    // Add more high scores here
  ];

  // Retrieve the user's high score from local storage
  const userHighScore = parseInt(localStorage.getItem('userScore')) || 0;

  // Retrieve high scores from local storage
  const highScoresFromLocalStorage = JSON.parse(localStorage.getItem('highScores')) || [];

  return (
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
  );
};

export default HighScoresPage;
