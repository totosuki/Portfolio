import { useEffect, useState } from "react";
import type { Tab } from "../types";
import TmuxBody from "./TmuxBody";
import TmuxHeader from "./TmuxHeader";

function Tmux() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [prefix, setPrefix] = useState(false);

  // tmuxのPrefix (Ctrl+B) 検知
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        setPrefix(true);
        setTimeout(() => setPrefix(false), 1000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '1') {
        e.preventDefault();
        setActiveTab('home');
      }
      else if (e.key === '2') {
        e.preventDefault();
        setActiveTab('products');
      }
      setPrefix(false);
    }

    if (prefix) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prefix]);

  return (
    <div className='w-full h-[calc(100%-40px)] px-[15px] py-[10px]'>
      <TmuxHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <TmuxBody activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default Tmux;
