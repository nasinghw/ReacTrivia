import React from 'react';
import { Link } from 'react-router-dom';

const GameSummary = ({ questionArray, result }) => {
  const { score, correct, incorrect } = result
  const highScoreArray = JSON.parse(localStorage.getItem('highscores')) || [];
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const highScoreData = {
      userName: event.target.userName.value,
      userScore: score
    }
    highScoreArray.push(highScoreData);
    localStorage.setItem("highScores", JSON.stringify(highScoreArray))
  }

  return (
    <div className="game-summary">
      <h2>Game Summary</h2>
      <ul>
        <li>Score: {score} out of {questionArray.length}</li>
        <li>Correct Answers: {correct} out of {questionArray.length}</li>
        <li>Incorrect Answers: {incorrect} out of {questionArray.length}</li>
      </ul>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name ="userName" placeholder='Your Name Here'></input>
        <button className="btn-primary" type="submit">Submit!</button>
      </form>
      <Link to="/">
        <button className="btn-primary" >Go home</button>
      </Link>
    </div>
    
  );
};

export default GameSummary;