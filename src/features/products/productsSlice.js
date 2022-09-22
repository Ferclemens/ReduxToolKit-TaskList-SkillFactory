import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", title: "to do 1", description: "to do 1 decription"},
    {id: "2", title: "to do 2", description: "to do 2 decription"},
    {id: "3", title: "to do 3", description: "to do 3 decription"},
    {id: "4", title: "to do 4", description: "to do 4 decription"},
]
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        //addProducts
        //deleteProducts
        //updateProducts
    }
})
export default productsSlice.reducer