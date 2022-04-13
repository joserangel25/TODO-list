import React from 'react';
import '../style/TodoItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarDays, faCheck, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const subrayarTarea = () =>{
    const tarea= document.getElementById('tarea');
    tarea.classList.toggle("subrayar");
}

const TodoItem = ( {tarea, fecha} ) => {
    return (
        

        //{/* <li className='todo-item'> */}
            <div className='todo-item'>
                <div>
                    <h4 id='tarea'>{tarea}</h4>
                    <p className='fecha'>
                        <FontAwesomeIcon icon={faCalendarDays} style={{color: "#1B676B", marginRight:"10px"}}/>
                        {fecha}
                    </p>
                </div>
                <div className='icon-container' onClick={subrayarTarea}>
                    <span className='icon-check'>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>      
                    <span className='icon-edit'>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </span>
                    <span className='icon-deleted'>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </span>  
                </div>
            </div>
        //{/* </li> */}
        
    );
}

export default TodoItem;