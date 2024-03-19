import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

  const AdvancedForm = ({ questionArray, setQuestionArray }) =>{
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
        const category = event.target.category.value
        const apiUrl = `https://the-trivia-api.com/v2/questions?limit=${questionLimit}&difficulties=${difficulty}&categories=${category}`;

  
  axios.get(apiUrl)
    .then(response => response.data)
    .then(userData => {
        const newQuestionArray = [];
        
        for (let index = 0; index < userData.length; index++) {
            const { category, correctAnswer, incorrectAnswers, question } = userData[index];
            const questionInfo = {
                category: category,
                correctAnswer: correctAnswer,
                choices: incorrectAnswers,
                question: question.text
        };
        questionInfo.choices.push(correctAnswer);
        shuffleArray(questionInfo.choices);
        newQuestionArray.push(questionInfo);
    }
        setQuestionArray(newQuestionArray)
        // console.log(questionArray)
        navigate('/questions-page')
})
.catch(error => {
    console.error('Error:', error);
});
        
        
        
        // fetch(apiUrl)
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then(userData => {
        //         const newQuestionArray = [];
        //         for (let index = 0; index < userData.length; index++) {
        //             const { category, correctAnswer, incorrectAnswers, question } = userData[index];
        //             const questionInfo = {
        //                 category: category,
        //                 correctAnswer: correctAnswer,
        //                 choices: incorrectAnswers,
        //                 question: question.text
        //             };
        //             questionInfo.choices.push(correctAnswer);
        //             shuffleArray(questionInfo.choices);
        //             newQuestionArray.push(questionInfo);
        //         }
        //         setQuestionArray(newQuestionArray)
        //         // console.log(questionArray)
        //         navigate('/questions-page')
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
        }


    return(
        <>
        <form className="w-full max-w-lg" onSubmit={handleFormSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <div className="relative">
                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Amount of questions
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="questionLimit" type="text" placeholder="# of questions (max 50)"/>
                        </div>
                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Difficulty
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="difficulty">
                                <option>easy</option>
                                <option>medium</option>
                                <option>hard</option>
                            </select>
                        </div>
                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Category
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="category">
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
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </form>
        </>
    );

}

export default AdvancedForm;


