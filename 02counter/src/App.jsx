import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    // let count = 15;
    // const addValue = ()=>{
    //   count = count+1;
    //   console.log(count, Math.random())
    //   return count;
    // }

    const [count, setCount] = useState(15);
    const addValue = () => {
        // count = count + 1;
        if (count < 20) {
            setCount(prevCount => prevCount+1);
            setCount(prevCount => prevCount+1);
            setCount(prevCount => prevCount+1);
            setCount(prevCount => prevCount+1);
            
        }
        console.log(count);
        return count;
    };
    const deleteValue = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <h1>Chai aur React</h1>
            <h2>{count}</h2>

            <button onClick={addValue}>Add value {count}</button>
            <button onClick={deleteValue}>Delete value {count}</button>
            <p>footer {count}</p>
        </>
    );
}

export default App;
