import React from 'react'

const StyleModal = {
  // width: "500px",
  // height: "200px",
  marginTop: '20px',
  padding: "30px 0",
  backgroundColor: "var(--light-color)",
  borderRadius: '8px'
}
const styleButton = {
  width: '80px',
  height: '40px',
  backgroundColor: 'var(--fuerte-color)',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  color: 'white',
  fontSize: '16px',
  marginTop: '10px'
}
const styleButtonClose = {
  width: '80px',
  height: '40px',
  backgroundColor: '#DA1212',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  color: 'white',
  fontSize: '16px',
  marginTop: '10px',
  marginRight: '10px'
}
const footerForm = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}

export const Modal = ({ setShowModal, textTarea, setTextTarea, addTodo }) => {
  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo()
  }
  return (
    <div style={StyleModal}>
        <div className="modal-contenido">
            <form onSubmit={handleAddTodo}>
                <label htmlFor='descripcion'>Descripción de la nueva tarea</label>
                <input 
                    className='input-modal'
                    type='text'
                    id='descripcion' 
                    name='descrpcion' 
                    value={textTarea} 
                    onChange={(e) => setTextTarea(e.target.value)}
                    />
                <div style={footerForm}>
                  <button type='button' style={styleButtonClose} onClick={() => setShowModal(false)}>Cerrar</button>
                  <button type='submit' style={styleButton} >Agregar</button>
                </div>
            </form>
        </div>  
    </div>
  );
}
