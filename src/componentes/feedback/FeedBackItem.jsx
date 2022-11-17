import { useState } from "react";

const FeedBackItem =()=>{

    //Estados iniciales

    const [ rating, setRating] = useState(1)
    const [ texto, setTexto] = useState("Buen instructor, mejorar los recursos")

    const cambiarNota = ()=>{
        setRating((prev)=>{
            return prev + 1
        })
    }

    return(
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-rating">
                { texto }
            </div>
            <button onClick={ cambiarNota }>
                Cambiar nota
            </button>
        </div>
    )
}

export default FeedBackItem