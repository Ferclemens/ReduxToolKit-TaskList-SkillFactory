import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../styles/TaskForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/tasks/tasksSlice'

function TaskForm() {
    //Logs data store
    //const state = useSelector((state) => state)
    //const products = useSelector((state) => state.products)
    //console.log('state in TaskForm', state)
    //console.log('products in TaskForm', products)

    const [tasks, setTasks] = useState([
    {
        title: 'title',
        task: 'tarea hardcodeada',
    }])

    const tipeTask = (e) => {
        setTasks({
            ...tasks,
            [e.target.name] : e.target.value
        })
    }
    console.log(tasks);

    const dispatch = useDispatch()
    
    const submitTask = (e) => {
        e.preventDefault()
        const date = new Date();
        const [month, day, year] = [date.getMonth(), 
                                    date.getDate(), 
                                    date.getFullYear()];
        const dateTask = `${day} - ${month+1} - ${year}` 
        dispatch(
            addTask({
                ...tasks,
                id: uuidv4(),
                date: dateTask,
            }))
        e.target.reset()
    }
    
    //console.log(text);
    //console.log(tasks);
  return (
    <div className='container'>
        <form className='formContainer' onSubmit={submitTask}>
            <label className='formLabel'>Title</label>
            <input className='formInput' name='title' type='text' placeholder='title task' onChange={tipeTask}></input>
            <label className='formLabel'>Task</label>
            <input className='formInput' name='task' type='textarea' placeholder='To do' onChange={tipeTask}></input>
            <button className='formButton' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default TaskForm