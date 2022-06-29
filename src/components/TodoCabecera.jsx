import React from 'react'

import '../style/TodoCabecera.css'

const TodoCabecera = ({ usserName, todosTotal, todosCompletados }) => {
    return (
        <div className='cabecera'>
            <h2>Hola de nuevo {usserName}, bienvenido!</h2>
            {
                todosTotal != 0 ?
                    <p className='subtitulo'>Has completado {todosCompletados} de {todosTotal} TODOs de la lista</p>
                    :
                    <p className='subtitulo'>Agrega tu primer TODO</p>
            }
        </div>
    );
}

export default TodoCabecera;