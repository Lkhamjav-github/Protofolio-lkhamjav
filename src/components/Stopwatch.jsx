// import React, { useEffect, useState } from "react";
// export const Stopwatch = () => {
//     const [counter, setCounter] = useState(0);
//     const [isVisible, setIsVisible] = useState(false);
//     const [toggle, setToggle] = useState(false);
//     const [timer, setTimer] = useState(0)
//     const reset = () => {
//         setTimer(0)
//     }

//     const Array = []
//     const lap = () => {
//         Array.push()
//     }
//     useEffect(() => {
//         if (!toggle) {
//             reset()
//         }
//         else {
//             lap()
//         }
//     }, [counter, toggle])
//     const add = () => {
//         if (!setTimer) {
//             setCounter(0)
//         }
//         else {
//             setTimer(1) * setCounter(counter + 1);
//         }
//     };
//     useEffect(() => {
//         if (!isVisible) {
//             add()
//         }
//     }, [counter, isVisible]);

//     return (
//         <div className="flex justify-center items-center gap-2 h-96">
//             <div>{counter}</div>
//             <button className="w-28 bg-white rounded-full" onClick={() => setToggle(!toggle)}>{isVisible ? <>Reset</> : <>Lap</>}</button>
//             <button className="w-28 bg-white rounded-full" onClick={() => setIsVisible(!isVisible)}>{isVisible ? <>Start</> : <>Stop</>}</button>

//         </div>
//     );
// };

// import React, { useState, useEffect } from 'react';

// const Stopwatch = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     let interval;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const handleStartStop = () => {
//     setIsRunning((prevIsRunning) => !prevIsRunning);
//   };

//   const handleReset = () => {
//     setIsRunning(false);
//     setTime(0);
//   };

//   return (
//     <div>
//       <h1>Stopwatch</h1>
//       <p>Time: {time} seconds</p>
//       <button onClick={handleStartStop}>
//         {isRunning ? 'Stop' : 'Start'}
//       </button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };