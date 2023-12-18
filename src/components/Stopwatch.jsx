import React, { useEffect, useState } from "react";
export const Stopwatch = () => {
    const [counter, setCounter] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const reset = () => {

    }
    const Array = []
    const lap = () => {
        Array.push()
    }
    useEffect(() => {
        if (!toggle) {
            reset()
        }
        else {
            lap()
        }
    }, [counter, toggle])
    const add = () => {
        setCounter(counter + 1);
    };
    useEffect(() => {
        if (!isVisible) {
            add()
        }
    }, [counter, isVisible]);

    return (
        <div className="flex justify-center items-center gap-2">
            <div>{counter}</div>
            <button onClick={() => setToggle(!toggle)}>{isVisible ? <>Reset</> : <>Lap</>}</button>
            <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? <>Start</> : <>Stop</>}</button>

        </div>
    );
};
