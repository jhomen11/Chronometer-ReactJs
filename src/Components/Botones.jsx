import React from 'react'

export const Botones = (props) => {
    return (
     
            <div>
            {(props.status === 0)?

                <button
                onClick={props.inicio}
                >Iniciar</button>: ""
            }
            
            {(props.status === 1)?
            
                <div>
                    <button 
                onClick={props.detener}
                >Detener</button>

                <button 
                onClick={props.resetear}
                >Resetear</button>
                </div>: ""
                
            }
            </div> 
            

            //  */
        
        
    )
}

export default Botones;