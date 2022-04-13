import { useState } from 'react'
import TodoCabecera from './components/TodoCabecera';
import TodoContainer from './components/TodoContainer';
import './App.css'
import NuevaTarea from './components/NuevaTarea';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <TodoCabecera usserName="Jose"/>

        {/* Cuerpo de la lista de los TODOs  */}
        <TodoContainer />

        {/* Boton para agregar nueva tarea y desplegar modal */}
        <NuevaTarea />
      </main>
    </div>
  )
}

export default App
