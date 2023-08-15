import React, { useState, useEffect } from 'react';

function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h2>Horário Atual:</h2>
      <p>{hora.toLocaleTimeString()}</p>
    </div>
  );
}

export default Relogio;

