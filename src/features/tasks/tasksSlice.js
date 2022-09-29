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
        deleteTask:(state,action) => {
            console.log('state en deleteTask', state)
            console.log('action en deleteTask', action)
            return state.filter((data) => data.id !== action.payload)
        },
        //updateTask
    },
})
export const { addTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer