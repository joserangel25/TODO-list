import React, { useState, useEffect } from "react";
import "../style/TodoContainer.css";
import TodoItem from "./TodoItem";

const TODOS = [
    {
        id: "1",
        tarea: "Llamar al médico paraa que nos de la formula",
        estado: false,
        fecha: "10/12/2012",
    },
    {
        id: "2",
        tarea: "Llamar al profesor paraa que nos de la tarea",
        estado: false,
        fecha: "08/08/2021",
    },
    {
        id: "3",
        tarea: "Llamar al pintor paraa que vaya a pintar la casa",
        estado: false,
        fecha: "28/07/2022",
    },
];

const TodoContainer = () => {
    const [todos, setTodos] = useState(TODOS);

    const subrayarTarea = (id) => {
        const todos = [...TODOS];
        todos.map((todo) => {
            if (todo.id === id) {
                todo.estado = !todo.estado;
            }
            return todo;
        });
        setTodos(todos);
    };

    return (
        <section>
            <div className="todo-container">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        tarea={todo.tarea}
                        id={todo.id}
                        fecha={todo.fecha}
                        estado={todo.estado}
                        subrayarTarea={subrayarTarea}
                    />
                ))}
            </div>
        </section>
    );
};

export default TodoContainer;
