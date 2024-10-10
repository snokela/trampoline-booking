import React, { useContext, useEffect, useRef, useState } from "react";
import '../App.css';
import UserForm from '../components/UserForm';
import CurrentJumper from '../components/CurrentJumper';
import getCurrentTimeStamp from '../utilis/getCurrentTimeStamp';
import { JumperDataContext } from "../contexts/JumperDataContext";
import GetJumpers from "./GetJumpers";

const HomePage = () => {

  //  tuodaan contextista jumperdata
  const { jumpersData, setJumpersData } = useContext(JumperDataContext);
  // tilanhallinta
  const [jumpers, setJumpers] = useState(GetJumpers);
  const [currentJumper, setCurrentJumper] = useState(null);
  const [jumpTime, setJumpTime] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [jumpStopped, setJumpStopped] = useState(false);
  const intervalRef = useRef(null);
  const startDateTimeRef = useRef(null);

  // useEffect(() => {
  //   // haetaan kaikki hyppijät tällähetkellä kahdesta kovakoodatusta pomppijasta listaan
  //   const jumpersList = GetJumpers();
  //   console.log('Asetetaan hyppijälista:', jumpersList);
  //   setJumpers(jumpersList);
  //   console.log('!!!Jumpers on setJumpersin jälkeen: ' + JSON.stringify(jumpers))
  // }, []);

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

    //tallennetaan uusi pomppijadata contextiin
    setJumpersData((prev) => [...prev, jumpingData])
    // setHistory(prevHistory => updateHistory(prevHistory, jumpingData));

    //tyhjennetään startDateTimeRef
    startDateTimeRef.current = null;
  }

  return (
    <div>
      <UserForm
        jumpers={jumpers}
        isJumping={isJumping}
        onStartJumping={handleStartJumping}
      />
      <CurrentJumper
        currentJumper={currentJumper}
        onStopJumping={handleStopJumping}
        jumpTime={jumpTime}
        jumpStopped={jumpStopped}
      />
    </div>
  )
}

export default HomePage;