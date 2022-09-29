import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task'
import { deleteTask } from '../features/tasks/tasksSlice'
import '../styles/TaskList.css'

function TaskList() {
    const tasks = useSelector((state) => state.tasks)
    console.log('TaskLists state', tasks)

    const dispatch = useDispatch()
    //pasamos la ejecución de la función por props (closeTask})
    const closeTask = (id) => {
        dispatch(
            deleteTask(id)
        )
    }

    return (
        <div>
            { tasks.map((task) => {
                return (
                    <Task key={task.id} data={task} id={task.id} closeTask={() => closeTask(task.id)} />
                    )
                })
            }
        </div>
    )
}
export default TaskList