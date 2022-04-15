import React, { useState, useEffect } from 'react'
import Search from './components/Search';
import TodoCabecera from './components/TodoCabecera';
import TodoContainer from './components/TodoContainer';
import TodoItem from './components/TodoItem';
import NuevaTarea from './components/NuevaTarea';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css'


/*
function useLocalStorage (itemName, initialValue ) {
  
  //Utilizando localStorage
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = useState(parsedItem);

    //Persistiendo los datos con localStorage

    const saveItem = (newItem) => {
      const itemStringify = JSON.stringify(newItem);
      localStorage.setItem(itemName, itemStringify);
      setItem(newItem); 
    }
    return [
      item,
      saveItem,
    ];
}
*/



function App() {

 
  const {
    item: todos,
    setValue: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  

  //Lista de tareas del TODOs con su Set
 
  const todosCompletados = todos.filter(todo => todo.estado === true).length;
  const todosTotal = todos.length;  

  const completeTodo = (tarea) => {
    const todoIndex = todos.findIndex(todo => todo.tarea === tarea);
    const newTodos = [...todos];
    newTodos[todoIndex].estado = true;
    saveTodos(newTodos);
  }

  

  //Editando el estado de la lista por si hubo un error
  const editTodo = (tarea) => {
    const todoIndex = todos.findIndex(todo => todo.tarea === tarea);
    const newTodos = [...todos];
    newTodos[todoIndex].estado = false;
    saveTodos(newTodos);
  }

  //Eliminar un elemento cuando se completa la tarea

  const deleteTodo = (tarea) => {
    console.log("ejecutando deleteTodo")
    const todoIndex= todos.findIndex(todo => todo.tarea === tarea);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
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
          {error && <p>Desesperate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !filtradoTodos.length) && <p>Crea tu primer TODO</p>}
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
