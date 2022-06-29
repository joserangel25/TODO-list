import React, { useState, useEffect } from 'react'
import Search from './components/Search';
import TodoCabecera from './components/TodoCabecera';
import TodoContainer from './components/TodoContainer';
import TodoItem from './components/TodoItem';
import NuevaTarea from './components/NuevaTarea';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css'
import { Modal } from './components/Modal';

const newFecha = () => {
  const date = new Date();
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  return `${day}/${month + 1}/${year}`;
}

function App() {

  const [ showModal, setShowModal ] = useState(false);
  const [ textTarea, setTextTarea ] = useState('');
 
  const {
    item: todos,
    setValue: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  
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

  //Funcion para agregar una tarea nueva
  const addTodo = () => {
    if(!textTarea.length){
        alert('Debe escribir algo en la descripcion')
        return
    }
    const newTodo = {
        tarea: textTarea,
        estado: false,
        fecha: newFecha(),
        id: Date.now(),
    };
    const newTodos = [...todos, newTodo];
    saveTodos(newTodos);
    setTextTarea('');
    setShowModal(false);
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
        {
          !showModal && !loading && !todosTotal == 0 &&  <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        }

        {/* Cuerpo de la lista de los TODOs  */}
        {
          !showModal ?
          <TodoContainer>
            {error && <p>Desesperate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
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
          : <Modal 
              setShowModal={setShowModal}
              textTarea={textTarea}
              setTextTarea={setTextTarea}
              addTodo={addTodo} />
        }

        {/* Boton para agregar nueva tarea y desplegar modal */}
        <NuevaTarea setShowModal={setShowModal}/>
      </main>
    </div>
  )
}

export default App
