import React, { useEffect, useState } from "react";




  const AdvancedForm = ({ questionArray, setQuestionArray }) =>{
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    useEffect(() => {
        const apiUrl = 'https://the-trivia-api.com/v2/questions?limit=10&categories=science,film_and_tv';
    
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
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
            })
            .catch(error => {
                console.error('Error:', error);
            });
      }, []);

    return(
        <>
        <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <div class="relative">
                        <div>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Amount of questions
                        </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="# of questions (max 50)"/>
                        </div>
                        <div>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Difficulty
                        </label>
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                        <div>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Category
                        </label>
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
                    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Submit
                    </button>
                </div>
            </div>
        </form>
        </>
    );

}

export default AdvancedForm;