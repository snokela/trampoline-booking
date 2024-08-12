import './App.css';
import Header from './components/Header';
import UserForm from './components/UserForm';
import CurrentJumper from './components/CurrentJumper';
import GetJumpers from './components/GetJumpers';
import { useEffect, useRef, useState } from 'react';

function App() {

  // pomppijoiden tila ja hallinta
  const [jumpers, setJumpers] = useState(GetJumpers());
  const [currentJumper, setCurrentJumper] =  useState(null);
  const [jumpTime, setJumpTime] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const intervalRef = useRef(null)

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
    // etsitään nykyinen hyppijä
    console.log('handleStartJumping called with jumperId:', jumperId); // Logita jumperId
    console.log('Current jumpers list:', jumpers); // Logita nykyinen jumpers lista
    const selectedJumper = jumpers.find(jumper => jumper.id === jumperId);
    console.log('Valittu pomppija on: ' + JSON.stringify(selectedJumper))

    setCurrentJumper(selectedJumper)
    setIsJumping(true);
    setJumpTime(0);
  }

  // funktio joka lopettaa pomppimisen
  const handleStopJumping = () => {
    setIsJumping(false);
  }

  return (
    <div className="App">
      <Header />
      <UserForm jumpers={jumpers} isJumping={isJumping} onStartJumping={handleStartJumping} />
      <CurrentJumper currentJumper={currentJumper} onStopJumping={handleStopJumping} jumpTime={jumpTime} />
    </div>
  );
}

export default App;
