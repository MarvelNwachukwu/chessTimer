import { useState } from 'react';
import './timer.scss';

const Timer = (props) => {

  let [whiteData, setWhiteData] = useState({ 
    hours: '',
    minutes: '',
    seconds: '',
    totalSeconds: 0
  });
  let [blackData, setBlackData] = useState({ 
    hours: '',
    minutes: '',
    seconds: '',
    totalSeconds: 0
  });

  //logic for changing white's time
  const timerChangerHandler = (e) => {
    let target = e.target;
    if(target.dataset.color === 'white') { 
      if(target.dataset.type === 'hr') { 
        if(target.value.length <= 2) { 
          setWhiteData({...whiteData, hours:`${target.value}`});
        }
      }
      else if(target.dataset.type === 'mn') { 
        if(target.value.length <= 2) { 
          setWhiteData({...whiteData, minutes:`${target.value}`});
        }
      }
      else{ 
        if(target.value.length <= 2) { 
          setWhiteData({...whiteData, seconds:`${target.value}`});
        }
      }
    }

    else if (target.dataset.color === 'black') { 
      if(target.dataset.type === 'hr') { 
        if(target.value.length <= 2) { 
          setBlackData({...blackData, hours:`${target.value}`})
        }
      }
      else if(target.dataset.type === 'mn') { 
        if(target.value.length <= 2) { 
          setBlackData({...blackData, minutes:`${target.value}`})
        }
      }
      else{ 
        if(target.value.length <= 2) { 
          setBlackData({...blackData, seconds:`${target.value}`})
        }
      }
    }
  }




  let [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  let [gameStarted, setGameStarted] = useState(false);
  return (
    <div id='app'>
      <header>
        <div className='logo'>chessly</div>
        <p>Countdown timer for chess</p>
      </header>
      <section className='content'>

        <div className='timer'>

          <div className='white'>
            <div className='label'>white</div>
            <div className='editTimer'></div>
            <form>
              <input 
                onChange={timerChangerHandler}
                type='number' 
                placeholder='00' 
                data-color='white'
                data-type='hr'
                value={whiteData.hours}
                max='90'
              />:
              <input 
                onChange={timerChangerHandler}
                type='number' 
                placeholder='00' 
                data-color='white'
                value={whiteData.minutes}
                data-type='mn'
              />:
              <input 
                onChange={timerChangerHandler}
                type='number' 
                placeholder='00' 
                data-color='white'
                value={whiteData.seconds}
                data-type='sc'
              />
            </form>
          </div>

          <div className='black'>
            <div className='label'>Black</div>
            <div className='editTimer'></div>
            <form>
              <input
                data-color='black' 
                onChange={timerChangerHandler}
                type='number' 
                placeholder='00' 
                data-type='hr'
                value={blackData.hours}
              />:
              <input
                data-color='black' 
                onChange={timerChangerHandler}
                type='number' 
                placeholder='00' 
                data-type='mn'
                value={blackData.minutes}
              />:
              <input
                data-color='black' 
                onChange={timerChangerHandler}
                type='number' 
                placeholder='00' 
                data-type='sc'
                value={blackData.seconds}
              />
            </form>
          </div>

        </div>

        <div className='controls'>
          <div className='switches'>
            <div className='white'>W</div>
            <div className='black'>B</div>
          </div>
          <div className='start'>Start Game</div>
          <div className='reset'>Reset</div>
        </div>
        
      </section>
    </div>
  );
};

export default Timer;
