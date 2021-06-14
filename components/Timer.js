import { useState, useEffect, useRef } from "react";
import Session from "./Session";
import Break from "./Break";
import Moves from "./Move";
import Speed from "./Speed";

const Timer = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerLabel, setTimerLabel] = useState("Go");
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [speed, setCurrentSpeed] = useState(100);

  const incrementSession = () => {
    setSessionLength(sessionLength + 1);
    setSecondsLeft((sessionLength + 1) * 60);
  };

  const decrementSession = () => {
    setSessionLength(sessionLength - 1);
    setSecondsLeft((sessionLength - 1) * 60);
  };

  const incrementBreak = () => {
    setBreakLength(breakLength + 1);
  };

  const decrementBreak = () => {
    setBreakLength(breakLength - 1);
  };

  const incrementSpeed = () => {
    setCurrentSpeed(speed + 5);
  };

  const decrementSpeed = () => {
    setCurrentSpeed(speed - 5);
  };

  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  useEffect(() => {
    const handleSwitch = () => {
      if (timerLabel === "Go") {
        setTimerLabel("Break");
        setSecondsLeft(breakLength * 60);
      } else if (timerLabel === "Break") {
        setTimerLabel("Go");
        setSecondsLeft(sessionLength * 60);
      }
    };

    let countdown = null;
    if (timerRunning && secondsLeft > 0) {
      countdown = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 100000 / speed);
    } else if (timerRunning && secondsLeft === 0) {
      countdown = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 100000 / speed);
      handleSwitch();
    } else {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [
    timerRunning,
    secondsLeft,
    timerLabel,
    breakLength,
    sessionLength,
    speed,
  ]);

  const handleStart = () => {
    setTimerRunning(true);
  };

  const handleStop = () => {
    setTimerRunning(false);
  };

  const handleReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setSecondsLeft(25 * 60);
    setTimerLabel("Go");
    setTimerRunning(false);
    setCurrentSpeed(1);
  };

  return (
    <div className='timer-component'>
      <div className='label-container'>
        {!timerRunning && (
          <>
            {" "}
            <Session
              sessionLength={sessionLength}
              incrementSession={incrementSession}
              decrementSession={decrementSession}
            />
            <Break
              breakLength={breakLength}
              incrementBreak={incrementBreak}
              decrementBreak={decrementBreak}
            />
          </>
        )}
        <Speed
          speed={speed}
          incrementSpeed={incrementSpeed}
          decrementSpeed={decrementSpeed}
        />
      </div>
      <div className='timer-container'>
        <h2 id='timer-label'>{timerLabel}</h2>
        <Moves
          minutes={minutes}
          seconds={seconds}
          timerRunning={timerRunning}
        />
        <button
          id='start_stop'
          onClick={timerRunning ? handleStop : handleStart}>
          {timerRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset} id='reset'>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
