import React, { useState, useEffect } from "react";
import "../style/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faCheck,
    faPenToSquare,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ id, tarea, fecha, estado, subrayarTarea }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        estado ? setChecked(true) : setChecked(false);
    }, [estado]);

    return (
        //{/* <li className='todo-item'> */}
        <div className="todo-item">
            <div>
                {checked ? (
                    <h4 id="tarea" className="subrayar">
                        {tarea}
                    </h4>
                ) : (
                    <h4 id="tarea">{tarea}</h4>
                )}
                <p className="fecha">
                    <FontAwesomeIcon
                        icon={faCalendarDays}
                        style={{ color: "#1B676B", marginRight: "10px" }}
                    />
                    {fecha}
                </p>
            </div>
            <div className="icon-container" onClick={() => subrayarTarea(id)}>
                <span className="icon-check">
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className="icon-edit">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </span>
                <span className="icon-deleted">
                    <FontAwesomeIcon icon={faTrashCan} />
                </span>
            </div>
        </div>
        //{/* </li> */}
    );
};

export default TodoItem;
