import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [triviaQuestion, setTriviaQuestion] = useState([]);
  const [rightAnswer, setrightAnswer] = useState("");
  const [currentPoints, setCurrentPoints] = useState(0);
  const [allPossibleAnswers, setAllPossibleAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  //combines correct and incorrect answer into single array
  async function combineAllAnswers(inrightAnswers, rightAnswer) {
    let allAnswers = [];
    inrightAnswers.map((item) => {
      item.incorrect_answers.map((inrightAnswer) => {
        allAnswers.push(inrightAnswer)
      });
    });
    allAnswers.push(rightAnswer);
    //Randomize order of answers in array
    allAnswers.sort(() => Math.random() - 0.5);
    setAllPossibleAnswers(allAnswers);
  }

  //Make api call to trivia api
  async function getTriviaData() {
    //Set loading boolean to true so that we know to show loading text
    setLoading(true);

    //Make trivia api call using axios
    const resp = await axios.get("https://opentdb.com/api.php?amount=1");

    setTriviaQuestion(resp.data.results);
    setrightAnswer(resp.data.results[0].correct_answer);

    //Combines correct and incorrect answers into single array
    await combineAllAnswers(resp.data.results, resp.data.results[0].correct_answer);


    //console logs
    console.log("Trivia Question:", tdbQuestion);
    console.log("Correct Answer:", rightAnswer);
    console.log("All Possible Answers:", allPossibleAnswers);
    console.log("correct Answer", rightAnswer);



    //Set loading boolean to false so that we know to show trivia question
    setLoading(false);
  }

  useEffect(() => {
    getTriviaData();
  }, []);

  function verifyAnswer(selectedAnswer) {
    //If the selected answer equals the correct answer, then we get the next trivia quesiton and increase the current points by 1
    if (selectedAnswer === rightAnswer) {
      getTriviaData();
      setCurrentPoints(currentPoints + 1);
    } else {
      //If the selected answer does not equal the correct answer, decreaes the current points by 1
      setCurrentPoints(currentPoints - 1);
    }
  }

  //Converts html code to regular characters
  function removeCharacters(question) {
    return question.replace(/(&quot\;)/g, "\"").replace(/(&rsquo\;)/g, "\"").replace(/(&#039\;)/g, "\'").replace(/(&amp\;)/g, "\"");
  }

  return (
    <div className="App">
      <header className="App-header">
        {loading ? "Trivia Question Loading..." : <div>
          <div>
            Current Points: {currentPoints}
          </div>
          <br />

          {triviaQuestion.map((triviaData, index) =>
            <div key={index}>
              <div>
                {removeCharacters(triviaData.question)}
              </div>
              <br />
              <div>
                {
                  allPossibleAnswers.map((answer, index) =>
                    <div key={index}>
                      <button key={index} onClick={() => verifyAnswer(answer)} >
                        {removeCharacters(answer)}
                      </button>
                    </div>
                  )
                }
              </div>
            </div>
          )}
        </div>
        }
      </header>
    </div>
  );
}

export default App;