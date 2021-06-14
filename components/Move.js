const punches = [
  "Right Upper Cut",
  "Cross",
  "Right Hook",
  "Down Elbow",
  "Cross Elbow",
  "Right Front Kick",
  "Right Side Kick",
  "Left Hook",
  "Left Upper Cut",
  "Jab",
  "Up Elbow",
  "Snap Elbow",
  "Left Front Kick",
  "Left Side Kick",
];

const defences = [
  "Bob & Weave (duck)",
  "Slide Left",
  "Slide Right",
  "Left Parry",
  "Right Parry",
];

const nd = defences.length;
const np = punches.length;

const getNextMove = (seconds) => {
  return seconds % 5
    ? punches[Math.floor(Math.random() * np)]
    : defences[Math.floor(Math.random() * nd)];
};

const Moves = ({ minutes, seconds, timerRunning }) => {
  return (
    <div className=''>
      {timerRunning && <h1 className='moveDisplay'>{getNextMove(seconds)}</h1>}
      <h1>{minutes * 60 + seconds}</h1>
    </div>
  );
};

export default Moves;
