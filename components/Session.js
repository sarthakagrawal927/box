const Session = ({ incrementSession, decrementSession, sessionLength }) => {
  return (
    <div className='session-container left'>
      <h2>Number of Moves</h2>

      <div className='button-container'>
        <button id='session-increment' onClick={incrementSession}>
          +
        </button>

        <h2 id='session-length' style={{ margin: 0 }}>
          {sessionLength * 60}
        </h2>

        <button id='session-decrement' onClick={decrementSession}>
          -
        </button>
      </div>
    </div>
  );
};

export default Session;
