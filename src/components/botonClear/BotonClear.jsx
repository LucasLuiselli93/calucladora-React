import React from 'react'
import "./BotonClear.scss"

const BotonClear = ({children, hacerClear}) => {
    return (
        <div className="boton-clear"
        onClick={hacerClear}
        >
            {children}
        </div>
    )
}

export default BotonClear
