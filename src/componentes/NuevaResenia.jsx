import Rating from "./Rating" 

const NuevaResenia = () => {
    
    return(
        <div className="card">
            <form>
                <h2>Como calificarias el curso?</h2>
                <div className="input-group">
                    <input type="text" placeholder="Escriba aqui su comentario" />
                    <button>
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    ) 
}

export default NuevaResenia