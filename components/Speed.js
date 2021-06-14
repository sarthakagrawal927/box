const Speed = ({ incrementSpeed, decrementSpeed, speed }) => {
  return (
    <div className='Speed-container center'>
      <h2>Speed</h2>

      <div className='button-container'>
        <button onClick={incrementSpeed}>+</button>

        <h2 style={{ margin: 0 }}>{speed}</h2>

        <button onClick={decrementSpeed}>-</button>
      </div>
    </div>
  );
};

export default Speed;
