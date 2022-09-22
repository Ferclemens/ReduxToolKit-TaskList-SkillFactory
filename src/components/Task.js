import React, { useState } from "react"
import { useSelector } from "react-redux"
import '../styles/Task.css'

const Task = ({id, task, date, complete},stateTask) => {
    const state = useSelector((state) => state)
    const animals = useSelector((state) => state.animals)
    console.log('state in Task', state);
    console.log('animals in Task', animals);

    const [show, setShow] = useState(true)
    
    console.log(show);
    const closeWindow = () => {
        setShow(!show)
    }
    let card =  <div className="taskContainer">
                    <button className="buttonClose" onClick={closeWindow}>X</button>
                    <input type='checkBox' className="buttonCheck" onClick={() => stateTask}/>
                    <div className="taskData">
                        <h3>{`${id}`}</h3>
                        <p>{`Complete: ${complete}`}</p>
                        <p>{`Fecha: ${date}`}</p>
                    </div>
                    <h5 className="task">{`${task}`}</h5>
                </div>
    
    let action = show ? card : <></>
   
    return (action)
}
export default Task