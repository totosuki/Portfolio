import { useEffect, useState } from 'react';
import Background from './components/Background';
import Loading from './components/Loading';
import Terminal from './components/Terminal';
import bg from './assets/background.webp';
import icon from './assets/icon.webp';
import './App.css';

function loadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  useEffect(() => {
    Promise.all([
      loadImage(bg),
      loadImage(icon),
    ])
      .then(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className='relative h-screen w-screen'>
      { isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} /> }
      <Background onOpen={() => setIsTerminalOpen(true)} />
    </div>
  );
}

export default App;
