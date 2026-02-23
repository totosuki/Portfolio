import { useState, useEffect } from 'react';

const SPINNER_FRAMES = ['|', '/', '-', '\\'];

function Loading() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(f => (f + 1) % SPINNER_FRAMES.length);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fixed inset-0 bg-black flex items-center justify-center'>
      <div className='flex flex-col items-start gap-[8px]'>
        <p>$ Initializing portfolio...</p>
        <p className='flex gap-[10px]'>
          <span>{SPINNER_FRAMES[frame]}</span>
          <span>Loading</span>
        </p>
      </div>
    </div>
  )
}

export default Loading;
