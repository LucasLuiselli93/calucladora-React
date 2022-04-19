import './App.scss';
import BotonClear from './components/botonClear/BotonClear';
import Botones from './components/botones/Botones.jsx';
import Pantalla from './components/pantalla/Pantalla';
import {useState} from "react"
import {evaluate} from "mathjs"
import swal from 'sweetalert';



function App() {

  const [input,setInput] = useState("")

  const addInput = value =>{
    setInput(input + value)
  }

  const hacerClear = () =>{
    setInput("")
  }


  const calcResultado = () =>{
    if(input){
      setInput(evaluate(input))
    }else{
     
      swal("Debes ingresar un numero")
      
    }
  }  

  return (
    <div className="App">
      
      <div className="calculadora-contenedor">
        <Pantalla input={input} />
        <div className="fila">
          <Botones hacerClick={addInput}>1</Botones>
          <Botones hacerClick={addInput}>2</Botones>
          <Botones hacerClick={addInput}>3</Botones>
          <Botones hacerClick={addInput}>+</Botones>
        </div>
        <div className="fila">
        <Botones hacerClick={addInput}>4</Botones>
        <Botones hacerClick={addInput}>5</Botones>
        <Botones hacerClick={addInput}>6</Botones>
        <Botones hacerClick={addInput}>-</Botones>
        </div>
        <div className="fila">
        <Botones hacerClick={addInput}>7</Botones>
        <Botones hacerClick={addInput}>8</Botones>
        <Botones hacerClick={addInput}>9</Botones>
        <Botones hacerClick={addInput}>*</Botones>
        </div>
        <div className="fila">
        <Botones hacerClick={addInput}>0</Botones>
        <Botones hacerClick={addInput}>.</Botones>
        <Botones hacerClick={addInput}>/</Botones>
        <Botones hacerClick={calcResultado}>=</Botones>
        </div>
        <div className="fila">
          <BotonClear hacerClear={hacerClear}>Limpiar</BotonClear>
        </div>
        
      </div>

    </div>
  );
}

export default App;
