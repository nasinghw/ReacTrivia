import QuestionContent from '../components/questionsPage/QuestionContent';

const QuestionsPage = ({ questionArray, setQuestionArray, result, setResult}) =>{

    return(
        <>
            <QuestionContent id="question-content" questionArray={questionArray} setQuestionArray={setQuestionArray} result={result} setResult ={setResult}/>
        </>
    );

}

export default QuestionsPage;