import React from "react"
import { useSelector } from "react-redux"
import '../styles/Task.css'


const Task = ({data, closeTask}) => {
    //const state = useSelector((state) => state)
    const tasks = useSelector((state) => state.tasks)
    //console.log('state in Task', state);
    console.log('tasks in Task', tasks);

    return (
        <div className="taskContainer" >
            {/*ejecutamos la función closeTask con el onClick simplemente invocando la prop*/}
            <button className="buttonClose" onClick={closeTask}>X</button>
            <input type='checkBox' className="buttonCheck"/>
            <div className="taskData">
                <h3>{`${data.id}`}</h3>
                <p>{`${data.title}`}</p>
                <p>{`Fecha: ${data.date}`}</p>
            </div>
            <h5 className="task">{`${data.task}`}</h5>
        </div>
    )
}
export default Task