import { useState } from 'react';
import Background from './components/Background';
import Terminal from './components/Terminal';
import './App.css';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  return (
    <div className='relative h-screen w-screen'>
      { isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} /> }
      <Background onOpen={() => setIsTerminalOpen(true)} />
    </div>
  );
}

export default App;
