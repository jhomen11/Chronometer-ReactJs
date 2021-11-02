import React from 'react'
import Botones from './Botones'

export const Cronometro = (props) => {
    return (
        <div>
            <h2>{(props.tiempo.h >=10)?props.tiempo.h :"0"+props.tiempo.h}</h2>:
            <h2>{(props.tiempo.m >=10)?props.tiempo.m :"0"+props.tiempo.m}</h2>:
            <h2>{(props.tiempo.s >=10)?props.tiempo.s :"0"+props.tiempo.s}</h2>:
            <h2>{(props.tiempo.ms >=10)?props.tiempo.ms :"0"+props.tiempo.ms}</h2>
        </div>
    )
}
export default Cronometro;