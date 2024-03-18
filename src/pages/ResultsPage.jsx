import GameSummary from '../components/resultsPage/GameSummary'

const ResultsPage = ({ questionArray, result }) =>{

    return(
        <>
            <GameSummary questionArray={questionArray} result={result}/>
        </>
    );

}

export default ResultsPage