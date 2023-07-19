
import React, { useState, useEffect } from 'react';

const Timer = ({ setTime, itemnum, isRunning, setIsRunning, level }) => {
  const [timer, setTimer] = useState();
  useEffect(() => {
    if (level === "easy") {
      setTimer(30);
    } else if (level === "hard") {
      setTimer(20);
    }
  }, [level]);

  useEffect(() => {

    const interval = setInterval(() => {
      if (isRunning) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    setTimer( level === "easy" ? 30 : 20 );
    setIsRunning(true);
  }, [itemnum]);


  useEffect(() => {
    if (timer === 0) {
      setTime(true);
      setIsRunning(false);
    }
  }, [timer, setTime]);

  return (
    <>
      <div>{timer}</div>

    </>
  );
};

export default Timer;
