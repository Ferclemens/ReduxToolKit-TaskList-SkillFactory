import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task'

function TaskList({data}) {
    const tasks = useSelector((state) => state.tasks)
    console.log('TaskLists state', tasks)
    console.log(data);
    return (
        <div>
        { data.map(({id, task, date, complete},state) => {
            return (<Task 
                key={id}
                id={id} 
                task={task}
                date={date}
                complete={complete}
                stateTask={state}
                />)
            })
        }
        </div>
    )
}

export default TaskList