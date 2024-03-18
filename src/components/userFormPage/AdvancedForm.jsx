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
        </>
    );

}

export default AdvancedForm;