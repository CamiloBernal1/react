import Header from "./feedback/Header";
import FeedBackItem from "./feedback/FeedBackItem";
import FeedBackList from "./feedback/FeedbackList";
import FeedbackData from "../data/FeedbackData";
import { useState } from "react";
import NuevaResenia from './NuevaResenia'

function App(){

    const headerStyles={
        backgroundColor: '#c7c7c7',
        color: '#000'
    }

    const [lista_feedback , setListaResenias] = useState(FeedbackData)

    //Metodo para eliminar una reseña

    const deleteResenia = (id) => {
        if(window.confirm('Esta seguro de borrar la reseña?')){
            //utilizar filter: filtrar las resenias que tengan id diferente al ingresado
            setListaResenias(lista_feedback.filter((feedback)=> feedback.id !== id ))
        }
    }

    return(
        <div className="container">
            <NuevaResenia />
            <FeedBackList
                deleteResenia = {deleteResenia}
                lista_feedback = {lista_feedback}
            />
        </div>
    )
}

export default App;