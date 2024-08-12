import './App.css';
import Header from './components/Header';
import UserForm from './components/UserForm';
import CurrentJumper from './components/CurrentJumper';
import GetJumpers from './components/GetJumpers';
import { useEffect, useState } from 'react';

function App() {

  // pomppijoiden tila
  const [jumpers, setJumpers] = useState(GetJumpers());
  // const [currentJumper, setCurrentJumper] =  useState(null);
  // // ajan hallinta
  // const [jumpTime, setJumpTime] = useState(0);
  // const [timer, setTimer] = useState(null);

  // haetaan pomppijat 'useEffect' -hookilla ja asetetaan se 'jumpers' tilaan
  useEffect(() => {
    const jumpersList = GetJumpers();
    setJumpers(jumpersList);
  }, []);

  return (
    <div className="App">
      <Header />
      <UserForm jumpers={jumpers} />
      <CurrentJumper />
    </div>
  );
}

export default App;
