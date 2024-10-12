import React, { useContext } from "react";
import { formatUnixTimeStampToDate } from '../utilis/formatUnixTimeStamps';
import { formatSeconds } from "../utilis/formatSeconds";
import { JumperDataContext } from "../contexts/JumperDataContext";

const JumpHistory = () => {
  //  tuodaan contextista jumperdata
  const { jumpersData } = useContext(JumperDataContext);
  const history = jumpersData;

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