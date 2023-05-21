import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/features/counterSlice'

const Counter = () => {

    const { value } = useSelector(state => state.counter)
    const dispatch = useDispatch()

  return (
    <div>
       <h3>Counter</h3>
       <p>Counter is = {value}</p>
       <button onClick={() => dispatch(increment())}>+1</button>
       <button onClick={() => dispatch(decrement())}>-1</button>
   </div>
  )
}

export default Counter