import React from "react";

export const MiComponente = () => {
    let nombre = 'Luisa';
    let apellido = 'Marín';
    let usuario = {
        nombre: "Luisa",
        apellidos: "Marín",
        edad: 37
    }

    return (
    <div className = "miComponente">
        <h1> Componente Creado </h1>
        <h3>Nombre del Usuario</h3>
        <ul>
            <li> Nombre: <strong> {usuario.nombre} </strong> </li>
            <li> Apellidos: <strong> {usuario.apellidos} </strong> </li>
            <li> Edad: <strong> {usuario.edad} </strong> </li>
        </ul>
        <p>Este es mi primer componente</p>
        <ul>
            <li>
                React
            </li>
            <li>
                Angular
            </li>
            <li>
                Vue
            </li>            
        </ul>
    </div>
    )
}
