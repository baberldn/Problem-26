import { useState, useEffect, useRef } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const timerId = useRef(null); 

  
  useEffect(() => {
    if (isRunning) {
      timerId.current = setInterval(() => {
        setTime(prevTime => prevTime + 1); 
      }, 1000);
    } else {
      clearInterval(timerId.current); 
    }

    
    return () => clearInterval(timerId.current);
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  return (
    <div className='p-12 mx-auto space-y-4 max-w-[300px]'>
      <div className='font-bold text-center text-3xl'>Zamanlayıcı: {time}s</div>
      <div className='flex justify-between'>
        <button onClick={handleStop} className='text-amber-500 font-bold'>Durdur</button>
        <button onClick={handleStart} className='text-green-500 font-bold'>Başlat</button>
      </div>
    </div>
  );
}
