import React, { useState } from 'react';


function Counter(){
    return(

    const [count, setCount] = useState(0);

        const increment = ()=>{
            setCount(count+1);
        }
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onCLick={decrement}>Decrement</button>

            <button className="counter-button" onCLick={increment}><Reset></Reset></button>

            <button className="counter-button" onCLick={reset}>Increment</button>
        </div>
    );
}

export default Counter