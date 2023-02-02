import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  // Bu useEffect(): Counterın İlk Yüklendiğinde çalışır (class da componentDidMount())
  useEffect(() => {
    console.log("Bu useEffect İlk Yüklendiğinde çalışır")
  },[]);  
  
  
  // Bu useEffect(): Counterın her değiştiğinde çalışır (class da componentDidUpdate())
  useEffect(() => {
    console.log("Counterın her değiştiğinde useEffect çalışır")
  },[counter]); 
  
  
  // Bu useEffect(): kullanılan useEffecti iptal eder (class da componentDidUnmount())
  useEffect(()=>{
    const myTimer = setInterval(()=>{
        setTimer(timer => timer+1)
    },1000)

    return () =>clearInterval(myTimer);
  },[])

  
  const increase = () => {
    setCounter(counter+1)
  }

  const decrease = () => {
    setCounter(counter-1)
  }

  return (
    <div>
      <h2>Function Component</h2> {/* // Function Component  */}
      <p>Counter: {counter} </p>  {/* // Counter: 0  */}
      <button onClick={() => increase() }>Increase</button>
      <button onClick={() => decrease() }>Decrease</button>
    </div>
  );
};


export default UseEffect;