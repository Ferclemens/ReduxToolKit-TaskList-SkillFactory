import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "UnO", title: "to do hardcore", task: "task hardCoreee!", date: "23-09-2022"},
]
const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask:(state, action) => {
            //console.log('state en addTask', state)
            //console.log('action en addTask', action)
            state.push(action.payload)
        },
        editTask: (state, action) => {
            const { id, title, task } = action.payload;
            const foundTask = state.find((task) => task.id === id);
            if (foundTask) {
              foundTask.title = title;
              foundTask.task = task;
            }
        },
        deleteTask:(state,action) => {
            console.log('state en deleteTask', state)
            console.log('action en deleteTask', action)
            return state.filter((data) => data.id !== action.payload)
        },
        //updateTask
    },
})
export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer