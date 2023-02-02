// useState(): component içindeki state verilerini yönetmenize olanak tanır. 

import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  
  const increase = () => {
    setCounter(counter+1)
  }

  const decrease = () => {
    setCounter(counter-1)
  }

  const reset = () => {
    setCounter(counter===0)
  }

  return (
    <div>
      <h2>Function Component</h2> {/* // Function Component  */}
      <p>Counter: {counter} </p>  {/* // Counter: 0  */}
      <button onClick={() => increase() }>Increase</button>
      <button onClick={() => decrease() }>Decrease</button>
      <button onClick={() => reset()    }>Reset   </button>
    </div>
  );
};

export default UseState;
