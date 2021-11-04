import React from 'react'

export const Botones = (props) => {
    return (
     
            <div className="control" >
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

            {(props.status === 2)?
                        
                        <div>
                            <button 
                        onClick={props.continuar}
                        >Continuar</button>

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