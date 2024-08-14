const updateHistory = (prevHistory, jumpingData) => {
  const userIndex = prevHistory.findIndex(user => user.name === jumpingData.name);

  if (userIndex !== -1) {
    return prevHistory.map((user, index) =>
      index === userIndex
        ? {
            ...user,
            history: [
              ...user.history,
              {
                timeSecs: jumpingData.timeSecs,
                start: jumpingData.startTime,
                end: jumpingData.endTime
              }
            ]
          }
        : user
    );
  } else {
    return [
      ...prevHistory,
      {
        name: jumpingData.name,
        history: [
          {
            timeSecs: jumpingData.timeSecs,
            start: jumpingData.startTime,
            end: jumpingData.endTime
          }
        ]
      }
    ];
  }
};

export default updateHistory;
