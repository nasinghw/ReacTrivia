import AdvancedForm from "../components/userFormPage/AdvancedForm";


const UserFormPage = ({ questionArray, setQuestionArray }) =>{

    return(
        <>
            <AdvancedForm questionArray={questionArray} setQuestionArray={setQuestionArray}/>
        </>
    );

}

export default UserFormPage;