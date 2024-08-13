export const formatSeconds = (seconds) => {
    const minutes =  Math.floor(seconds / 60);
    const secs = seconds % 60;
    return (
      <span> pompit {minutes} minuuttia ja {secs} sekuntia.</span>
    );
  }
