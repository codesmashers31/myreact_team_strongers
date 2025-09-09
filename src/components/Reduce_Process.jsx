import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Reduce_Process = () => {

    console.log('this is process');
    
  // Access Redux state
  const count = useSelector((state) => state.counter.count);
  // Get dispatch function
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Reduce_Process;
