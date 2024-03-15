const questionArray =[];



const apiUrl = 'https://the-trivia-api.com/v2/questions?limit=10&categories=science,film_and_tv';


fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    console.log('User Data:', userData);
  })
  .catch(error => {
    console.error('Error:', error);
  });