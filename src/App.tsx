import Background from './components/Background';
import Terminal from './components/Terminal';
import './App.css';

function App() {
  return (
    <div className='relative h-screen w-screen'>
      <Terminal />
      <Background />
    </div>
  );
}

export default App;
