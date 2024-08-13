import './App.css';
import Header from './components/Header';
import UserForm from './components/UserForm';
import CurrentJumper from './components/CurrentJumper';
import GetJumpers from './components/GetJumpers';
import { useEffect, useRef, useState } from 'react';
import JumpHistory from './components/JumpHistory';
import getCurrentTimeStamp from './utilis/getCurrentTimeStamp';
import { saveJumpingData } from './utilis/storageUtilis';

function App() {

  // pomppijoiden tila ja hallinta
  const [jumpers, setJumpers] = useState(GetJumpers());
  const [currentJumper, setCurrentJumper] =  useState(null);
  const [jumpTime, setJumpTime] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [jumpStopped, setJumpStopped] = useState(false);
  const intervalRef = useRef(null);
  const startDateTimeRef = useRef(null);

  // haetaan pomppijat 'useEffect' -hookilla ja asetetaan se 'jumpers' tilaan
  useEffect(() => {
    const jumpersList = GetJumpers();
    console.log('Setting jumpers list:', jumpersList);
    setJumpers(jumpersList);
  }, []);

  // Ajastimen hallinta 'useEffect'-hookilla
  useEffect(() => {
    if (isJumping) {
      console.log('Käynnistetään ajastin')
      intervalRef.current = setInterval(() => {
        setJumpTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isJumping && jumpTime !== 0) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [ isJumping, jumpTime ]);

  // funktio, joka käynnistää pomppimisen
  const handleStartJumping = (jumperId) => {
    const selectedJumper = jumpers.find(jumper => jumper.id === jumperId);
    // console.log('Valittu pomppija on: ' + JSON.stringify(selectedJumper))
    // setStartDateTime(getCurrentDateTime());
    // console.log('datetimedata kun painetaa aloita nappia: ' + startDateTime)
    startDateTimeRef.current =  getCurrentTimeStamp();
    setCurrentJumper(selectedJumper)
    setIsJumping(true);
    setJumpTime(0);
    setJumpStopped(false);
  }

  // funktio joka lopettaa pomppimisen
  const handleStopJumping = () => {
    // console.log('tämä pomppija lopetti pomppimisen: ' + JSON.stringify(currentJumper) )
    console.log('pomppimisaika lopettamisen jälkeen: ' + jumpTime )
    setIsJumping(false);
    setJumpStopped(true);

    const endDateTime = getCurrentTimeStamp();
    console.log('datetimedata kun painetaa lopeta nappia: ' + endDateTime)

    const jumpingData = {
      name: currentJumper.name,
      timeSecs: jumpTime,
      // startDate: startDateTimeRef.current.date,
      startTime: startDateTimeRef.current,
      // endDate: endDateTime.date,
      endTime: endDateTime
    };
    // console.log('JumpingData joka talletetaan: ' + JSON.stringify(jumpingData))

    // talletetaan jumping data
    saveJumpingData(jumpingData);
    // tyhjennetään startDateTimeRef
    startDateTimeRef.current = null;
  }

  return (
    <div className="App">
      <Header />
      <UserForm jumpers={jumpers} isJumping={isJumping} onStartJumping={handleStartJumping} />
      <CurrentJumper currentJumper={currentJumper} onStopJumping={handleStopJumping} jumpTime={jumpTime} jumpStopped={jumpStopped} />
      <JumpHistory />
    </div>
  );
}

export default App;
