import './App.css';
import Header from './components/Header';
import GetJumpers from './components/GetJumpers';
import React, { useContext, useEffect, useRef, useState } from 'react';
import getCurrentTimeStamp from './utilis/getCurrentTimeStamp';
import updateHistory from './utilis/upDateHistory';
import useLocalStorage from './utilis/useLocalStorage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import JumpHistoryPage from './components/JumpHistoryPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import { JumperProvider } from './contexts/JumperDataContext';

function App() {
  const [history, setHistory] = useLocalStorage('jumpingData', []);
  const [jumpers, setJumpers] = useState(GetJumpers());
  const [currentJumper, setCurrentJumper] = useState(null);
  const [jumpTime, setJumpTime] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [jumpStopped, setJumpStopped] = useState(false);
  const intervalRef = useRef(null);
  const startDateTimeRef = useRef(null);

  // haetaan pomppijat 'useEffect' -hookilla ja asetetaan se 'jumpers' tilaan
  useEffect(() => {
    const jumpersList = GetJumpers();
    console.log('Asetetaan hyppijälista:', jumpersList);
    setJumpers(jumpersList);
    console.log('!!!Jumpers on setJumpersin jälkeen: ' + JSON.stringify(jumpers))
  }, []);

  // Ajastimen hallinta 'useEffect'-hookilla
  useEffect(() => {
    if (isJumping) {
      console.log('Käynnistetään ajastin')
      intervalRef.current = setInterval(() => {
        setJumpTime(prevTime => prevTime + 1);
      }, 1000);
    }
    // cleanup -functio: ajastin pysäytetään jos isjumping muuttuu tai komponentti poistetaan
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null //nollataan, ettei jää vanhoja ajastimia
    };
  }, [isJumping]);

  // funktio, joka käynnistää pomppimisen
  const handleStartJumping = (jumperId) => {
    const selectedJumper = jumpers.find(jumper => jumper.id === jumperId);
    console.log('Valittu pomppija on: ' + JSON.stringify(selectedJumper))
    startDateTimeRef.current = getCurrentTimeStamp();
    setCurrentJumper(selectedJumper)
    setIsJumping(true);
    setJumpTime(0);
    setJumpStopped(false);
  }

  // funktio joka lopettaa pomppimisen
  const handleStopJumping = () => {
    setIsJumping(false);
    setJumpStopped(true);

    const endDateTime = getCurrentTimeStamp();

      // tämä objekti tallennetaan contextiin
    const jumpingData = {
      name: currentJumper.name,
      timeSecs: jumpTime,
      startDate: startDateTimeRef.current.date,
      startTime: startDateTimeRef.current,
      endDate: endDateTime.date,
      endTime: endDateTime
    };

    //päivitetään historia ja tallennetaan localstorageen
    setHistory(prevHistory => updateHistory(prevHistory, jumpingData));

    //tyhjennetään startDateTimeRef
    startDateTimeRef.current = null;
  }

  return (
    <JumperProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    jumpers={jumpers}
                    isJumping={isJumping}
                    onStartJumping={handleStartJumping}
                    currentJumper={currentJumper}
                    onStopJumping={handleStopJumping}
                    jumpTime={jumpTime}
                    jumpStopped={jumpStopped}
                  />
                }
              />
              <Route
                path='/jumping-history'
                element={
                  <JumpHistoryPage
                    history={history}
                  />
                }
              />
              <Route
                path="/about"
                element={
                  <AboutPage
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
      <Footer />
    </JumperProvider>
  );
}

export default App;
