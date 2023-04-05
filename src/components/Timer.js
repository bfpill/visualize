import React, { useState, useEffect } from 'react';

const Timer = ({ seconds }) => {
  const [time, setTime] = useState(seconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStartTimer = () => {
    setIsRunning(true);
  };

  const handleStopTimer = () => {
    setIsRunning(false);
  }

  useEffect(() => {
    if (time === 0) {
      setIsRunning(false);
    }
  }, [time]);

  return (
    <div>
      <p style={{ color: time === 0 ? 'red' : 'black' }}>Time: {time}</p>
      <button className="button" onClick={!isRunning ? handleStartTimer : handleStopTimer}>{!isRunning ? 'Start Timer' : 'Stop Timer'}</button>
    </div>
  );
};

export default Timer;
