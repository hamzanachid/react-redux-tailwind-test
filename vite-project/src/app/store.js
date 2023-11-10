import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../features/counter/CounterSlice'

const Store=configureStore({
    reducer:{
        counter:CounterReducer
    }
})

export default Store