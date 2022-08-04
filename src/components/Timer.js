import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      props.incrementTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <i className="bi bi-stopwatch"></i>
      {props.minutes<10?"0"+props.minutes:props.minutes}:{props.seconds<10?"0"+props.seconds:props.seconds}
    </>
  );
};

export default Timer;
