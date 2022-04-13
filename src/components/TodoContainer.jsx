import React from 'react'
import '../style/TodoContainer.css'
import TodoItem from './TodoItem';

const TODOS = [
    {
        tarea: "Llamar al médico paraa que nos de la formula",
        estado: false,
        fecha: "10/12/2012"
    },
    {
        tarea: "Llamar al profesor paraa que nos de la tarea",
        estado: false,
        fecha: "08/08/2021"
    },
    {
        tarea: "Llamar al pintor paraa que vaya a pintar la casa",
        estado: false,
        fecha: "28/07/2022"
    }
  
  ]

const TodoContainer  = () => {
    return (
        <section>
            <div className='todo-container'>                    
                {TODOS.map(todo => (<TodoItem key={todo.tarea} tarea={todo.tarea} fecha={todo.fecha}/>))}
            </div>
        </section>
    );
}

export default TodoContainer;