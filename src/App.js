import React, { useState } from 'react';

import './App.css';
import Botones from './Components/Botones';
import Cronometro from './Components/Cronometro';

function App() {

  //1-.state que inicializa y modifica el tiempo
  const [tiempo, guardarTiempo] = useState({ms:0, s:0, m:0, h:0})

  //4-.state que guarda y ejecuta la funcion empezar() con un setInterval cada 10 milisegundos
  const [intervalo, setIntervalo] = useState()

  //5-. state que guarda el comportamiento de los botones
  const [status, guardarStatus] = useState(0)

  //2-.Funcion del boton que inicia el tiempo y lo guarda en el state
  const inicio = () => {
    guardarStatus(1)
    empezar();
    setIntervalo(setInterval(empezar,10))

  }

  let actualizaMs = tiempo.ms, actualizaS = tiempo.s,actualizaM = tiempo.m,actualizaH = tiempo.h;

  //3-.Funcion que va actualizando el tiempo
  const empezar = ()=>{
    if(actualizaM === 60){
      actualizaH++;
      actualizaM=0
    }
    if(actualizaS === 60){
      actualizaM++;
      actualizaS=0
    }
    if(actualizaMs === 100){
      actualizaS++;
      actualizaMs = 0;
    }
    actualizaMs++;
    //4-.Se moifica en el state tiempo con el tiempo en proceso
    return guardarTiempo({ms:actualizaMs, s:actualizaS, m:actualizaM, h:actualizaH})

  }

  const continuar = ()=>{
    inicio()
  }

  const resetear = () =>{
    clearInterval(intervalo)
    guardarTiempo({ms:0, s:0, m:0, h:0})
    guardarStatus(0)
  }
  
  const detener = ()=>{
    clearInterval(intervalo)
    guardarStatus(2)
  }
  return (
    <div className="container">
      <div className="App">
      <Cronometro tiempo = {tiempo}/>
      <Botones inicio = {inicio} detener={detener} resetear={resetear} continuar={continuar} status={status}/>
    </div>
    </div>
  );
}

export default App;
