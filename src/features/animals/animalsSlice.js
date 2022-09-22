import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", title: "animal 1", description: "cat"},
    {id: "2", title: "animal 2", description: "dog"},
    {id: "3", title: "animal 3", description: "fish"},
]

const animalsSlice = createSlice({
    name: "animals",
    initialState,
    reducers: {
        //addAnimals
        //deleteAnimals
        //updateAnimals
    }
})
export default animalsSlice.reducer
