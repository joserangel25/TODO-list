import React, { useState } from 'react'
import '../style/NuevaTarea.css'

const NuevaTarea = ({setShowModal}) => {
    return (  
        <>
            <div className='add-tarea' onClick={() => setShowModal(true)}>
                    <p>+</p>
            </div>            
        </>
    );
}

export default NuevaTarea;