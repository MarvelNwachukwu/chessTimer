import { useState } from 'react';
import "./timer.scss";

const Timer = (props) => {

  let [whiteData, setWhiteData] = useState({ 

  });
  let [blackData, setBlackData] = useState({ 

  });
  let [currentlyPlaying, setCurrentlyPlaying] =useState(false);
  let [gameStarted, setGameStarted] = useState(false);
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
            <form>
              <input type="text" placeholder="00" />:
              <input type="text" placeholder="00" />:
              <input type="text" placeholder="00" />
            </form>
          </div>

          <div className="timerTwo">
            <div className="label">Black</div>
            <div className="editTimer"></div>
            <form>
              <input type="text" placeholder="00" />:
              <input type="text" placeholder="00" />:
              <input type="text" placeholder="00" />
            </form>
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
