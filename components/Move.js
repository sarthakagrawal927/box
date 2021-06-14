const punches = [
  "Right Upper Cut",
  "Right Jab",
  "Right Hook",
  "Right Elbow Uppercut",
  "Right Elbow Hook",
  "Right Push Kick",
  "Left Hook",
  "Left Upper Cut",
  "Left Jab",
  "Left Elbow Uppercut",
  "Left Elbow Hook",
  "Left Push Kick",
];

const defences = [
  "Right Reverse Flick",
  "Right Flick",
  "Left Reverse Flick",
  "Left Flick",
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
