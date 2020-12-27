import "./timer.scss";

const Timer = (props) => {
  return (
    <div id="app">
      <header>
        <div className="logo">chessly</div>
        <p>Countdown timer for chess</p>
      </header>
      <section className="content">
        <div className="timer">
          <div className="timerOne">
            <div className="label">white</div>
            <div className="editTimer"></div>
            <form action="">
              <input type="text" placeholder="00" />:
              <input type="text" placeholder="00" />:
              <input type="text" placeholder="00" />
            </form>
            <div className="timerTwo">
              <div className="label">Black</div>
              <div className="editTimer"></div>
              <form action="">
                <input type="text" placeholder="00" />:
                <input type="text" placeholder="00" />:
                <input type="text" placeholder="00" />
              </form>
            </div>
          </div>
        </div>
        <div className="controls">
          <div className="switches">
            <div className="white">W</div>
            <div className="black">B</div>
          </div>
          <div className="start">Start Game</div>
          <div className="reset">Reset</div>
        </div>
      </section>
    </div>
  );
};

export default Timer;
