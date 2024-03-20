import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdvancedForm = ({ questionArray, setQuestionArray }) => {
  const navigate = useNavigate();

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const questionLimit = event.target.questionLimit.value;
    const difficulty = event.target.difficulty.value;
    const category = event.target.category.value;
    const apiUrl = `https://the-trivia-api.com/v2/questions?limit=${questionLimit}&difficulties=${difficulty}&categories=${category}`;

    axios
      .get(apiUrl)
      .then((response) => response.data)
      .then((userData) => {
        const newQuestionArray = [];

        for (let index = 0; index < userData.length; index++) {
          const { category, correctAnswer, incorrectAnswers, question } =
            userData[index];
          const questionInfo = {
            category: category,
            correctAnswer: correctAnswer,
            choices: incorrectAnswers,
            question: question.text,
          };
          questionInfo.choices.push(correctAnswer);
          shuffleArray(questionInfo.choices);
          newQuestionArray.push(questionInfo);
        }
        setQuestionArray(newQuestionArray);
        // console.log(questionArray)
        navigate("/questions-page");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="mt-10 text-xl text-zync-100">Configure your Game</h1>
      <form
        className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20 "
        onSubmit={handleFormSubmit}
      >
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Nº OF QUESTIONS
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                name="questionLimit"
                type="text"
                placeholder="# of questions (max 50)"
              />
            </div>
            <div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Difficulty
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:cursor-pointer"
                id="grid-state"
                name="difficulty"
              >
                <option>easy</option>
                <option>medium</option>
                <option>hard</option>
              </select>
            </div>
            <div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Category
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:cursor-pointer"
                id="grid-state"
                name="category"
              >
                <option>music</option>
                <option>sport_and_leisure</option>
                <option>film_and_tv</option>
                <option>arts_and_literature</option>
                <option>history</option>
                <option>society_and_culture</option>
                <option>science</option>
                <option>geography</option>
                <option>food_and_drink</option>
                <option>general_knowledge</option>
              </select>
            </div>
          </div>
          <button
            className="mt-4 w-full bg-purple-900 hover:bg-purple-700 text-sm text-white py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdvancedForm;
