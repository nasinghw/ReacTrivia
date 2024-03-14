import React from 'react';

const questionArray = [];


const apiUrl = 'https://the-trivia-api.com/v2/questions?limit=10&categories=science,film_and_tv';

// Make a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {

    userData.forEach((index) => {
        questionArray.push(index.category)
    })

    console.log(userData)
  })
  .catch(error => {
    console.error('Error:', error);
  });


const QuestionContent = ()=>{

    return(
        <>
        <h1>This is the Question Content Component</h1>
        </>
    )

}

export default QuestionContent;

