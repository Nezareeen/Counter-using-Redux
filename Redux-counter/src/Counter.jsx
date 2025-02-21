// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment } from './redux/counterSlice';

const Counter = () => {
    const count = useSelector((state)=>state.reducer.count);
    const dispatch = useDispatch();

    const decre = () => {
        dispatch(decrement(1));
    }

    const incre = () => {
        dispatch(increment(1));
    }

  return (
    <div>
        <button onClick={decre} >-</button>
        <h3>{count}</h3>
        <button onClick={incre} >+</button>
    </div>
  )
}

export default Counter;