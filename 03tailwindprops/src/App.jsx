import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-red-500 bg-green-500 mb-4">Tailwind Test</h1>
            <Card username= "Rohan"/>
            <Card username= "Rohit" btnText = 'Subscribe'/>
        </>
    );
}

export default App;
