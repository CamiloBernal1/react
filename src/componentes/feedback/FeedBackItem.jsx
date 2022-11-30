import { useState } from 'react';
import {FaTimes} from 'react-icons/fa'

const FeedBackItem =({feedback, deleteResenia})=>{

    return(
        <div className="card">
            <div className="num-display">
                { feedback.rating }
            </div>
            <div className="text-rating">
                { feedback.texto }
            </div>
            <button onClick={()=>deleteResenia(feedback.id)} className="close">
                <FaTimes />
            </button>
        </div>
    )
}

export default FeedBackItem