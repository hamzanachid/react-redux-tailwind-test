import {createSlice} from '@reduxjs/toolkit'

const initialState={
    count:0
}

const CounterSlicer=createSlice({
    name:'counter',
    initialState,
    reducers:{
        plus:(state,action)=>{ 
            state.count+=action.payload
            // you can just do state.count++ if you dont want to use action.payload in this case
        },
        minus:(state)=>{
            state.count--
        },
        reset:(state)=>{
            state.count=0
        }
    }
})

export default CounterSlicer.reducer

export const {plus,minus,reset}=CounterSlicer.actions