import React, { useState, useEffect } from 'react';

const Timer = () => {
  const initialTime = {
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  };
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(interval);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return `${time.days} days ${time.hours} hours ${time.minutes} minutes ${time.seconds} seconds`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default Timer;
