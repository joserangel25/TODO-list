import React, { useState } from 'react';
import '../style/TodoItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarDays, faCheck, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';


const TodoItem = ({ tarea, fecha, todoEstado, onComplete, onDelete, onEdit } ) => {
    
    
    return (
    
        <li className='todo-item'>
             {/* <div className='todo-item'> */}
                <div>
                    <h4 id='tarea' className={`${todoEstado && 'subrayar'}`} value={todoEstado}>{tarea}</h4>
                    <p className='fecha'>
                        <FontAwesomeIcon icon={faCalendarDays} style={{color: "#1B676B", marginRight:"10px"}}/>
                        {fecha}
                    </p>
                </div>
                <div className='icon-container btnOption'>
                    <span className='icon-check' onClick={onComplete}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>      
                    <span className='icon-edit btnOption' ide='btn2' onClick={onEdit}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </span>
                    <span className='icon-deleted btnOption' ide='btn3' onClick={onDelete}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </span>  
                </div>
            {/* </div> */}
        </li>
        
    );
}



export default TodoItem;