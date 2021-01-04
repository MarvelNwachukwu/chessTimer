import { useState } from 'react';
import './timer.scss';

const Timer = (props) => {
  let [whiteData, setWhiteData] = useState({
    hours: '',
    minutes: '',
    seconds: '',
    totalSeconds: 0,
  });
  let [blackData, setBlackData] = useState({
    hours: '',
    minutes: '',
    seconds: '',
    totalSeconds: 0,
  });

  const startCountDown = () => {
    whoIsPlaying === ''
      ? setWhoIsPlaying('white')
      : setWhoIsPlaying('black')
      ? setWhoIsPlaying('white')
      : setWhoIsPlaying('black');
    let count = {
      white: {
        hr:
          parseInt(whiteData.hours) > 0 ? parseInt(whiteData.hours * 3600) : 0,
        mn:
          parseInt(whiteData.minutes) > 0
            ? parseInt(whiteData.minutes * 60)
            : 0,
        sc: parseInt(whiteData.seconds) > 0 ? parseInt(whiteData.seconds) : 0,
      },
      black: {
        hr:
          parseInt(blackData.hours) > 0 ? parseInt(blackData.hours * 3600) : 0,
        mn:
          parseInt(blackData.minutes) > 0
            ? parseInt(blackData.minutes * 60)
            : 0,
        sc: parseInt(blackData.seconds) > 0 ? parseInt(blackData.seconds) : 0,
      },
    };

    let countWhite = count.white;
    let countBlack = count.black;

    let whiteTotalSeconds = countWhite.hr + countWhite.mn + countWhite.sc;
    let blackTotalSeconds = countBlack.hr + countBlack.mn + countBlack.sc;
  };

  const timerChangerHandler = (e) => {
    let target = e.target;
    if (target.dataset.color === 'white') {
      if (target.dataset.type === 'hr') {
        if (target.value.length <= 2) {
          whiteData.hours.length < target.value.length
            ? setDataWatch({ ...dataWatch, white: true })
            : whiteData.minutes.length > 0 || whiteData.seconds.length > 0
            ? setDataWatch({ ...dataWatch, black: true })
            : setDataWatch({ ...dataWatch, black: false });
          setWhiteData({ ...whiteData, hours: `${target.value}` });
        }
      } else if (target.dataset.type === 'mn') {
        if (target.value.length <= 2) {
          whiteData.minutes.length < target.value.length
            ? setDataWatch({ ...dataWatch, white: true })
            : whiteData.hours.length > 0 || whiteData.seconds.length > 0
            ? setDataWatch({ ...dataWatch, black: true })
            : setDataWatch({ ...dataWatch, black: false });
          setWhiteData({ ...whiteData, minutes: `${target.value}` });
        }
      } else {
        if (target.value.length <= 2) {
          whiteData.seconds.length < target.value.length
            ? setDataWatch({ ...dataWatch, white: true })
            : whiteData.hours.length > 0 || whiteData.minutes.length > 0
            ? setDataWatch({ ...dataWatch, black: true })
            : setDataWatch({ ...dataWatch, black: false });
          setWhiteData({ ...whiteData, seconds: `${target.value}` });
        }
      }
    } else if (target.dataset.color === 'black') {
      if (target.dataset.type === 'hr') {
        if (target.value.length <= 2) {
          blackData.hours.length < target.value.length
            ? setDataWatch({ ...dataWatch, black: true })
            : blackData.minutes.length > 0 || blackData.seconds.length > 0
            ? setDataWatch({ ...dataWatch, black: true })
            : setDataWatch({ ...dataWatch, black: false });
          setBlackData({ ...blackData, hours: `${target.value}` });
        }
      } else if (target.dataset.type === 'mn') {
        if (target.value.length <= 2) {
          blackData.minutes.length < target.value.length
            ? setDataWatch({ ...dataWatch, black: true })
            : blackData.hours.length > 0 || blackData.seconds.length > 0
            ? setDataWatch({ ...dataWatch, black: true })
            : setDataWatch({ ...dataWatch, black: false });
          setBlackData({ ...blackData, minutes: `${target.value}` });
        }
      } else {
        if (target.value.length <= 2) {
          blackData.seconds.length < target.value.length
            ? setDataWatch({ ...dataWatch, black: true })
            : blackData.hours.length > 0 || blackData.minutes.length > 0
            ? setDataWatch({ ...dataWatch, black: true })
            : setDataWatch({ ...dataWatch, black: false });
          setBlackData({ ...blackData, seconds: `${target.value}` });
        }
      }
    }
  };

  const resetTimer = () => {
    console.log('I was clicked ' + Math.random());
  };

  let [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  let [gameStarted, setGameStarted] = useState(false);
  let [gameSet, setGameSet] = useState(false);
  let [dataWatch, setDataWatch] = useState({
    white: false,
    black: false,
  });
  let [whoIsPlaying, setWhoIsPlaying] = useState('white');

  return (
    <div id='app'>
      <div className='desktop'>
        <header>
          <div className='logo'>chessly</div>
          <p>Countdown timer for chess</p>
        </header>
        <section className='content'>
          <div className='timer'>
            <div className='timerOne'>
              <div className='label'>white</div>
              {/* <div className='editTimer'></div> */}
              <form>
                <input
                  onChange={timerChangerHandler}
                  type='tel'
                  placeholder='00'
                  data-color='white'
                  data-type='hr'
                  value={whiteData.hours}
                />
                :
                <input
                  onChange={timerChangerHandler}
                  type='tel'
                  placeholder='00'
                  data-color='white'
                  data-type='mn'
                  value={whiteData.minutes}
                />
                :
                <input
                  onChange={timerChangerHandler}
                  type='tel'
                  placeholder='00'
                  data-color='white'
                  data-type='sc'
                  value={whiteData.seconds}
                />
              </form>
            </div>

            <div className='timerTwo'>
              <div className='label'>Black</div>
              <div className='editTimer'></div>
              <form>
                <input
                  onChange={timerChangerHandler}
                  type='tel'
                  placeholder='00'
                  data-color='black'
                  data-type='hr'
                  value={blackData.hours}
                />
                :
                <input
                  onChange={timerChangerHandler}
                  type='tel'
                  placeholder='00'
                  data-color='black'
                  data-type='mn'
                  value={blackData.minutes}
                />
                :
                <input
                  onChange={timerChangerHandler}
                  type='tel'
                  placeholder='00'
                  data-color='black'
                  data-type='sc'
                  value={blackData.seconds}
                />
              </form>
            </div>
          </div>

          <div className='controls'>
            <div className='switches'>
              <div
                className='white'
                style={{ opacity: `${whoIsPlaying === 'white' ? '1' : '0.3'}` }}
              >
                W
              </div>
              <div
                className='black'
                style={{ opacity: `${whoIsPlaying === 'black' ? '1' : '0.3'}` }}
              >
                B
              </div>
            </div>
            <div
              className={
                dataWatch.white && dataWatch.black ? 'start' : 'startDull'
              }
              style={{
                opacity: `${dataWatch.white && dataWatch.black ? '1' : '0.3'}`,
                cursor: `${
                  dataWatch.white && dataWatch.black ? 'pointer' : 'not-allowed'
                }`,
              }}
              onClick={
                dataWatch.white && dataWatch.black ? startCountDown : () => {}
              }
            >
              Start Game
            </div>
            <div id='breaker'></div>
            {/* This div helps create a break between the div before and after */}
            <div
              className={`${
                dataWatch.white || dataWatch.white ? 'reset' : 'resetDull'
              }`}
              style={{
                opacity: `${
                  whiteData.hours
                    ? '1'
                    : whiteData.minutes
                    ? '1'
                    : whiteData.seconds
                    ? '1'
                    : '0.3'
                }`,
                cursor: `${
                  whiteData.hours
                    ? 'pointer'
                    : whiteData.minutes
                    ? 'pointer'
                    : whiteData.seconds
                    ? 'pointer'
                    : 'not-allowed'
                }`,
              }}
              onClick={resetTimer}
            >
              Reset
            </div>
          </div>
        </section>
      </div>

      <div className='mobile'>
        <div className='blackSide'>
          <div className='mobileBlackSwitch'>B</div>
        </div>
        <div className='controls'></div>
        <div className='whiteSide'>
          <div className='mobileWhiteSwitch'>W</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
