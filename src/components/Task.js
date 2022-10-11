import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { editTask } from "../features/tasks/tasksSlice"
import '../styles/Task.css'


const Task = ({data, closeTask}) => {
    //const state = useSelector((state) => state)
    const tasks = useSelector((state) => state.tasks)
    //console.log('state in Task', state);
    console.log('tasks in Task', tasks);
    
    const dispatch = useDispatch()
    
    const edit = (id) => {
        dispatch(editTask(id))
    }
    return (
        <div className="taskContainer" >
            {/*ejecutamos la función closeTask con el onClick simplemente invocando la prop*/}
            <button className="buttonClose" onClick={closeTask}>X</button>
            {/* <input type='checkBox' className="buttonCheck"/> */}
            <div className="taskData">
                <h3>{`${data.id}`}</h3>
                <p>{`Fecha: ${data.date}`}</p>
                <button className="buttonEdit" onClick={edit(data.id)}>Edit</button>
            </div>
            <h5 className="task">{`${data.title}`}</h5>
            <p className="taskText">{`${data.task}`}</p>
        </div>
    )
}
export default Task