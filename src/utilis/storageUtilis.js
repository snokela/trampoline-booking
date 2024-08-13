// pompputietojen tallentaminen localstorageen
export const saveJumpingData = (data) => {
  const storedData =  localStorage.getItem('jumpingData');
  const jumpingData = storedData ? JSON.parse(storedData) : [];

  const userIndex = jumpingData.findIndex(user => user.name === data.name);

  if (userIndex !== -1) {
    // jos käyttäjä löytyy, lisätään historiaan uusi tieto
    jumpingData[userIndex].history.push({
      timeSecs: data.timeSecs,
      start: data.startTime,
      end: data.endTime
    });
  } else {
    // jos käyttäjää ei löydy, lisätään uusi käyttäjä
    jumpingData.push({
      name: data.name,
      history: [
        {
          timeSecs: data.timeSecs,
          start: data.startTime,
          end: data.endTime
        }
      ]
    });
  }

  localStorage.setItem('jumpingData', JSON.stringify(jumpingData));
}

// pompputietojen haku localstoragesta
export const getJumpingData = () => {
  const storedData = localStorage.getItem('jumpingData');
  return storedData ? JSON.parse(storedData) : [];
}
