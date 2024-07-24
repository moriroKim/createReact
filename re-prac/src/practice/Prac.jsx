import { useState } from 'react'
import '../App.jsx';
import '../App.css';

function Prac() {
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(prevCount => prevCount + 1);
    };
    const onDecrease = () => {
        setCount(prevCount => prevCount - 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    )
}

export default Prac;