import React, {useState} from 'react';
import classes from "./Counter.module.scss"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleCounter = ({target}: React.MouseEvent<HTMLButtonElement>): void => {
        setCounter(prevState => prevState+=1)
    }
    return (
        <div className={classes.button}>
            <h2>{counter}</h2>
            <button onClick={handleCounter} name='add'>+</button>

        </div>
    );
};

export default Counter;