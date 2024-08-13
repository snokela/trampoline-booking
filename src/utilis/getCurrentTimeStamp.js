const getCurrentTimeStamp = () => {
  return Math.floor(Date.now() / 1000);
  //const dateTimeData =  new Date();
  //return dateTimeData.toString()
  // return {
  //   date: dateTimeData.toLocaleDateString(),
  //   time: dateTimeData.toLocaleTimeString()
  // };
}

export  default getCurrentTimeStamp;