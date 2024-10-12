import React, { useContext } from "react";
import { formatUnixTimeStampToDate } from '../utilis/formatUnixTimeStamps';
import { formatSeconds } from "../utilis/formatSeconds";
import { JumperDataContext } from "../contexts/JumperDataContext";

const JumpHistory = () => {
  //  tuodaan contextista jumperdata
  const { jumpersData } = useContext(JumperDataContext);

  //  JumperData contextista: [{
  //   "jumperId": 2,
  //    "name": 'marsu',
  //   "history": [
  //     { "timeSecs": 4, "startTime": 1728732547, "endTime": 1728732552 },
  //     { "timeSecs": 3, "startTime": 1728732570, "endTime": 1728732574 }
  //   ]
  // }]

  const history = jumpersData;
  // console.log('historydata: ' + JSON.stringify(history));
  // console.log('historydata: ' + history[0].name);

  return (
    <div className="justify-content-center pb-3">
      <h5 className="fw-bolder pb-3 mt-4">Pomppuhistoria</h5>
      {history.length === 0 ? (
        <p>Ei pomppuhistoriaa!</p>
      ) : (
        history.map((user) => (
          <div key={user.jumperId}>
            <h6>{user.name}</h6>
            <ul>
              {user.history.map((entry, idx) => (
                <li key={idx} className="history-list">
                  {formatUnixTimeStampToDate(entry.startTime)}
                  {formatSeconds(entry.timeSecs)}
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