import React from 'react'
import '../style/NuevaTarea.css'

const showModal = () => {
    alert('Aquí se mostrará pronto el modal')
}

const NuevaTarea = () => {
    return (        
            <div className='add-tarea' onClick={showModal}>
                <p>+</p>
            </div>
        
    );
}

export default NuevaTarea;