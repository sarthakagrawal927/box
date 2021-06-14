
const getNextMove = (minutes,seconds) => {
  const movesList = ["Right Upper Cut","Left Upper Cut" , "Right Hook", "Left Hook", "Right Jab", "Left Jab"]
  return seconds%2 ? movesList[0] : movesList[1];
}
const Moves = ({minutes,seconds}) => {
  return (
    <div className=''>
      <h1>{getNextMove(minutes,seconds)}
</h1>
<p>
        {minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:
          {seconds < 10 ? ("0" + seconds).slice(-2) : seconds}
</p>
    </div>
  );
};

export default Moves;
