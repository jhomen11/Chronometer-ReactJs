import React from 'react'

export const Botones = (props) => {
    return (
        <div>
            <button
            onClick={props.inicio}
            >Iniciar</button>
            
            <button onClick={props.detener}
            >Detener</button>

            <button onClick={props.resetear}>Resetear</button>
        </div>
        
    )
}

export default Botones;