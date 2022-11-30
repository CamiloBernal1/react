import Feedback from "./FeedBackItem"

const FeedBackList = ({ lista_feedback, deleteResenia }) => {
    return(
        <div className="feeedback-list">
            {/*Recorrer el arreglo de resenias */}
            { lista_feedback.map((feedback)=>(
                <FeedBack
                    deleteResenia={deleteResenia}
                    key={feedback.id}
                    feedback = {feedback}
                />
            ))}
        </div>
    )
}

export default FeedBackList