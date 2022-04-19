import React from 'react'
import "./Botones.scss"

const Botones = ({children,hacerClick}) => {

const esSimbolo = valor =>{
  return isNaN(valor) && (valor != ".") && (valor != "=");
}

    return (
        <div
        className={`botones-contenedor ${esSimbolo(children) ? "simbolo-boton" : ""}`.trimEnd() } 
        onClick={()=> hacerClick(children)}>
            {children}
        </div>
    )
}

export default Botones
