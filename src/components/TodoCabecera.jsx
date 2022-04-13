import React from 'react'
import '../style/TodoCabecera.css'

const TodoCabecera = ({ usserName }) => {
    return (
        <div className='cabecera'>
            <h2>Hola de nuevo {usserName}, bienvenido!</h2>
            <p className='subtitulo'>Has completado 2 de 3 TODOs de la lista</p>
        </div>
    );
}

export default TodoCabecera;