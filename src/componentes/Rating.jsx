import { useState } from "react"

const Rating = () => {

    //Estados iniciales de la calificacion
    const [ notaElegida, setNotaElegida ] =  useState(10)

    //Metodo para cambiar la nota
    const cambiarNota = e => {
        setNotaElegida(+e.currentTarget.value)
    }

    return(
        <div className="rating">
            <ul className="rating">
                {[ 1,2,3,4,5,6,7,8,9,10 ].map((numero)=>(
                    <li key={numero}>
                        <input id={ `num${numero}` } type="radio" name="rating" value={numero} onChange={ cambiarNota } checked = { notaElegida === numero }  /> 
                        <label htmlFor={`num${numero}`}> {numero} </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Rating