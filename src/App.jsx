import React, { useState } from 'react'
import Search from './components/Search';
import TodoCabecera from './components/TodoCabecera';
import TodoContainer from './components/TodoContainer';
import TodoItem from './components/TodoItem';
import NuevaTarea from './components/NuevaTarea';
import './App.css'

const todosDefault = [
  {
      tarea: "Llamar al médico paraa que nos de la formula",
      estado: false,
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

];

function App() {

  //Lista de tareas del TODOs con su Set
  const [todos, setTodos] = useState(todosDefault);
  const todosCompletados = todos.filter(todo => todo.estado == true).length;
  const todosTotal = todos.length;  

  const completeTodo = (tarea) => {
    const todoIndex = todos.findIndex(todo => todo.tarea === tarea);
    const newTodos = [...todos];
    newTodos[todoIndex].estado = true;
    setTodos(newTodos);
  }

  //Editando el estado de la lista por si hubo un error
  const editTodo = (tarea) => {
    const todoIndex = todos.findIndex(todo => todo.tarea === tarea);
    const newTodos = [...todos];
    newTodos[todoIndex].estado = false;
    setTodos(newTodos);
  }

  //Eliminar un elemento cuando se completa la tarea

  const deleteTodo = (tarea) => {
    console.log("ejecutando deleteTodo")
    const todoIndex= todos.findIndex(todo => todo.tarea === tarea);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }

  //Filtrando a través del input search
  const [searchValue, setSearchValue] = useState("");

  let filtradoTodos = [];

  if(!searchValue >= 1){
    filtradoTodos = todos;
  } else {
    filtradoTodos = todos.filter(todo => {
      const todoText = todo.tarea.toLowerCase();
      const searchText= searchValue.toLowerCase();      
      return todoText.includes(searchText);
    });
  } 



  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <TodoCabecera usserName="Jose" todosTotal={todosTotal} todosCompletados={todosCompletados}/>

        {/* Componente para realizar los filtros o busquedas */}
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>

        {/* Cuerpo de la lista de los TODOs  */}
        <TodoContainer>
          {filtradoTodos.map(todo => (
            <TodoItem 
                key={todo.id} 
                tarea={todo.tarea} 
                fecha={todo.fecha} 
                todoEstado={todo.estado}
                onComplete={()=> completeTodo(todo.tarea)}
                onDelete={()=> deleteTodo(todo.tarea)}
                onEdit={()=> editTodo(todo.tarea)}
            />))}
        </TodoContainer>

        {/* Boton para agregar nueva tarea y desplegar modal */}
        <NuevaTarea />
      </main>
    </div>
  )
}

export default App
