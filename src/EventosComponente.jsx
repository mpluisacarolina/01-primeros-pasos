import React from 'react'

export const EventosComponente = () => {
    const hasDadoClick = (e, nombre) => {
        alert ("Has dado click al botón!! "+ nombre);
    }
    function hasDadoDobleClick(e) {
        alert ("Has dado doble click al botón!! ");
    }
    const hasEntradoSalido = (e, accion) => {
        console.log("Has " +accion+ " a la caja del mouse!!");
    }
    const estasDentro = e => {
        console.log("Estás dentro, ingresa tu nombre");
    }
    const estasFuera = e => {
        console.log("Estás fuera, chau chau");
    }
    return (
    <div>
        <h1> Eventos en React </h1>
        <p>
            <button onClick = { e => hasDadoClick (e, "Luisa") } > Dame clic </button>
        </p>

        <p>
            <button onDoubleClick = { hasDadoDobleClick } > Dame doble clic </button>
        </p>

        <div id = "caja"
            onMouseEnter = { e => hasEntradoSalido(e, "entrado") }
            onMouseLeave = { e =>  hasEntradoSalido (e, "salido") }
        >
            Pasa por encima
        </div>

        <p>
            <input type = "text" 
                onFocus={ estasDentro } 
                onBlur = { estasFuera }
                placeholder="Introduce tu nombre..." />
        </p>

    </div>
  ) 
}
