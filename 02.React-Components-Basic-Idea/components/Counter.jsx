/* eslint-disable no-unused-vars */
import { useState } from 'react';
export default function Counter(props) {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount((c) => c + 1);
  };
  const decrementCounter = () => {
    setCount((c) => c - 1);
  };
  const clearCounter = () => {
    setCount(0);
  };
  /*  if(count<0){
        return(
            <h3>Invalid Count</h3>
        )
    } */

  let warning = null;
    if(count<0){
        warning = <p>Invalid Count</p>;
    }

    let message = null;
    switch (count) {
        case 1: message='More....'
        break;
        case 2: message='Go on....'
        break;
        case 3: message='Increment more....'
        break;
        case 4: message='Increment more more....'
        break;
        }
  return (
    <div>
      <h2>Counter:{count}</h2>
       {warning}
      {/* {count < 0 ? <p>Invalid Count</p> : null} */}
      {count==0&&<p>Please increment</p>}
      <h4>{message}</h4>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={clearCounter}>Clear</button>
    </div>
  );
}
