import { useState } from "react";

const Home = () => {
    
    const [count, setCount] = useState (0)

    const [error, setError] = useState()

    const minLimit = 0

    const handleIncrease = () => {
        setCount(count +1)
        setError()
    }  

    const handleDecrease = () => {
       if (count === minLimit) {
            setError('You have reached minimum limit!');       
       } 
       else {
            setCount(count - 1)
            setError()
       }
    }    
    const reset = () => {
        setCount(0)
        setError()
    }    
    return ( 
        <div className="content">
            <h1>Counter Application</h1>
            <h1>{count}</h1>
            <div className="button">
                <button onClick={() => handleDecrease()}>Decrease (-)</button>
                <button id="reset" onClick={() => reset()}>Reset</button>
                <button onClick={() => handleIncrease()}>Increase (+)</button>
            </div>
            <div className="error">
                <p>{error}</p>
            </div>
        </div>
     );
}
 
export default Home;