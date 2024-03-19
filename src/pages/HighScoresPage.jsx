
import React, { useState } from 'react';

const HighScoresPage = () => {
  // Fetch high scores from your database or use dummy data
  const highScores = [
    { username: 'Player1', score: 20 },
    { username: 'Player2', score: 17 },
    // Add more high scores here
  ];

  // Retrieve the user's high score from local storage
  const userHighScore = parseInt(localStorage.getItem("userScore")) || 0;

  // Retrieve data from local storage and create an array of high scores
  const highScoresFromLocalStorage = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("userScore")) {
      const userScore = parseInt(localStorage.getItem(key));
      const userName = localStorage.getItem("userName");
      highScoresFromLocalStorage.push({ username: userName, score: userScore });
    }
  }

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
            {score.username}: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighScoresPage;
