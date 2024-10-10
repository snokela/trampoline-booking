import React, { useContext } from "react";
import '../App.css';
import UserForm from '../components/UserForm';
import CurrentJumper from '../components/CurrentJumper';
import { JumperDataContext } from "../contexts/JumperDataContext";

const HomePage = ({ jumpers, isJumping,  onStartJumping, currentJumper, onStopJumping, jumpTime, jumpStopped }) => {

  //  tuodaan contextista jumperdata
  const { jumpersData, setJumpersData } = useContext(JumperDataContext);

  console.log('Jumpers data: ' + JSON.stringify(jumpers))
  return (
    <div>
      <UserForm
        jumpers={jumpers}
        isJumping={isJumping}
        onStartJumping={onStartJumping}
      />
      <CurrentJumper
        currentJumper={currentJumper}
        onStopJumping={onStopJumping}
        jumpTime={jumpTime}
        jumpStopped={jumpStopped}
      />
    </div>
  )
}

export default HomePage;