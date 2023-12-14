import React from 'react'

export const TercerComponente = ({nombre, apellido, ficha}) => {
    return (
        <div>
            <h1> Comunicación entre Componentes </h1>
            <ul>
                <li> {nombre} </li>
                <li> {apellido} </li>
                <li> {ficha.alergias} </li>
            </ul>
        </div>
    )
}

TercerComponente.defaultProps = {
    nombre: "Victor",
    apellido: "Herrera"
}

