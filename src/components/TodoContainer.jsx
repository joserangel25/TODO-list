import React, { useState } from 'react'
import '../style/TodoContainer.css'
import TodoItem from './TodoItem';

/*
const TODOS = [
    {
        tarea: "Llamar al médico paraa que nos de la formula",
        estado: true,
        fecha: "10/12/2012",
        id: 1
    },
    {
        tarea: "Llamar al profesor paraa que nos de la tarea",
        estado: false,
        fecha: "08/08/2021",
        id: 2
    },
    {
        tarea: "Llamar al pintor paraa que vaya a pintar la casa",
        estado: false,
        fecha: "28/07/2022",
        id: 3
    }
  
  ]

const TodoContainer  = () => {

    
    return (
        <section>
            <ul className='todo-container'>                    
                {TODOS.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        tarea={todo.tarea} 
                        fecha={todo.fecha} 
                        estado={todo.estado}
                    />))}
            </ul>
        </section>
    );
}
*/

// aquí estoy comenzando a modificar como lo venia trabajando
//me llevao la lista de tareas al componente App y desde allá lo mando para TodoContainer.jsx


const TodoContainer  = (props) => {

    
    return (
        <section>
            <ul className='todo-container'>                    
                {props.children}
            </ul>
        </section>
    );
}


export default TodoContainer;


