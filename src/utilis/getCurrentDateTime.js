const getCurrentDateTime = () => {
  const dateTimeData =  new Date();
  return {
    date: dateTimeData.toLocaleDateString(),
    time: dateTimeData.toLocaleTimeString()
  };
}

export  default getCurrentDateTime;