import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { plus,minus,reset } from '../features/counter/CounterSlice'
function Counter() {
    const count=useSelector((state)=>state.counter.count) 
    const dispatch=useDispatch()
    return (
        <div className='w-[100vw] h-[100vh] bg-gray-950 flex justify-center items-center'>
            <div className='w-[50vw] h-[40vh]  '>
                <div className='w-[100%] h-[50%] flex justify-center items-center'>
                    <div className='w-[25%] h-[60%] bg-white rounded-md flex justify-center items-center'>
                        <h1 className='text-4xl'>{count}</h1>
                    </div>
                </div>
                <div className='w-[100%] h-[50%] capitalize  flex justify-around items-center'>
                    <div onClick={()=>{dispatch(plus(1))}} className='w-[25%] h-[60%] cursor-pointer bg-white rounded-md flex justify-center items-center'>
                        <h1  className='text-3xl'>plus one</h1>
                    </div>
                    <div onClick={()=>{dispatch(reset())}} className='w-[25%] h-[60%] bg-white cursor-pointer rounded-md flex justify-center items-center'>
                        <h1 className='text-3xl'>reset</h1>
                    </div>
                    <div onClick={()=>{dispatch(minus())}} className='w-[25%] h-[60%] bg-white cursor-pointer rounded-md flex justify-center items-center'>
                        <h1 className='text-3xl'>minus one</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter