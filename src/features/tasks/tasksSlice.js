import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", title: "to do 1"},
    {id: "2", title: "to do 2"},
    {id: "3", title: "to do 3"},
    {id: "4", title: "to do 4"}
]
const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask:(state, action) => {
            console.log('state en addTask', state)
            console.log('action en addTask', action)
            state.push(action.payload)
        },
        //deleteTask,
        //updateTask
    },
})
export const { addTask } = taskSlice.actions
export default taskSlice.reducer