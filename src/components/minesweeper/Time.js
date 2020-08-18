import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Time(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [time, setTime] = useState("0:00:00");
  const { start, showResult } = props;

  useEffect(() => {
    let interval = setInterval(() => setSeconds(seconds + 1), 1000);

    if (seconds === 60) {
      setMinutes(minutes + 1);
      setSeconds(0);
    }

    if (minutes === 60) {
      setHours(hours + 1);
      setMinutes(0);
    }

    setTime(
      `${hours}${minutes < 10 ? ":0" : ":"}${minutes}${
        seconds < 10 ? ":0" : ":"
      }${seconds}`
    );
    showResult(time);

    if (!start) {
      clearInterval(interval);
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    }

    return () => clearInterval(interval);
  }, [seconds, minutes, hours, start, time, showResult]);

  return <div className="border border-dark rounded p-2 m-1">{time}</div>;
}

const mapStateToProps = (state) => {
  return {
    start: state.minesweeper.start,
  };
};

export default connect(mapStateToProps)(Time);
