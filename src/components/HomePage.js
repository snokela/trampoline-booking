import React from "react";
import '../App.css';
import UserForm from '../components/UserForm';
import CurrentJumper from '../components/CurrentJumper';
// import GetJumpers from '../components/GetJumpers';
// import React from 'react';
// // import getCurrentTimeStamp from './utilis/getCurrentTimeStamp';
// // import updateHistory from './utilis/upDateHistory';
// // import useLocalStorage from './utilis/useLocalStorage';


// function HomePage(jumpers, isJumping, currentJumper, onStopJumping, jumpTime, jumpStopped, onStartJumping) {

//   return (
//     <div>
//       <UserForm jumpers={jumpers} isJumping={isJumping} onStartJumping={onStartJumping}/>
//       {currentJumper && (
//         <CurrentJumper
//           currentJumper={currentJumper}
//           onStopJumping={onStopJumping}
//           jumpTime={jumpTime}
//           jumpStopped={jumpStopped}
//         />
//       )}
//     </div>
//   );
// }

// export default HomePage;

const HomePage = ({ jumpers, isJumping,  onStartJumping, currentJumper, onStopJumping, jumpTime, jumpStopped }) => {
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