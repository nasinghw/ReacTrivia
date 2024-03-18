import QuestionContent from '../components/questionsPage/QuestionContent';

const QuestionsPage = ({ questionArray, setQuestionArray }) =>{

    return(
        <>
            <QuestionContent questionArray={questionArray} setQuestionArray={setQuestionArray}/>
        </>
    );

}

export default QuestionsPage;