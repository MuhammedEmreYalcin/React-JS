import React from 'react'
import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../stores/counterSlice";
import "../app.css"


const CounterActions = () => {
  const dispatch = useDispatch()

    return (
    <div className='counter-buttons'>
      <button className="counter-button" onClick={()=>dispatch(increment())}>+</button>
      <button className="counter-button" onClick={()=>dispatch(decrement())}>-</button>
      <button className="counter-button" onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
      <button className="counter-button" onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  );
};

export default CounterActions;
