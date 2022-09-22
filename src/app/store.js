import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/tasks/tasksSlice'
import productsReducer from '../features/products/productsSlice'
import animalsSlice from "../features/animals/animalsSlice";

export const store = configureStore({
    reducer:{
        tasks: taskReducer,
        products: productsReducer,
        animals: animalsSlice
    },
})