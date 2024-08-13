import React from "react";
import { useState, useEffect } from "react";
import { getJumpingData } from "../utilis/storageUtilis";
import { formatUnixTimeStampToDate } from '../utilis/formatUnixTimeStamps';
import { formatSeconds } from "../utilis/formatSeconds";

const JumpHistory = ({ history }) => {
  // const [history, setHistory] = useState([]);

  // useEffect(() => {
  //   const data = getJumpingData();
  //   setHistory(data);
  // }, []);

  // console.log('HISTORY-data on nyt tämä: ' + JSON.stringify(history))

  return (
    <div className="justify-content-center pb-3">
      <h5 className="fw-bolder pb-3 mt-4">Pomppuhistoria</h5>
      {history.length === 0 ? (
        <p>Ei pomppuhistoriaa!</p>
      ) : (
        history.map((user, index) => (
          <div key={index}>
            <h6>{user.name}</h6>
            <ul>
              {user.history.map((entry, idx) => (
                <li key={idx}>
                  {formatUnixTimeStampToDate(entry.start)}{formatSeconds(entry.timeSecs)}
                </li>
              ))}
            </ul>
          </div>
        ))
     )}
     </div>
  );
}

export default JumpHistory;