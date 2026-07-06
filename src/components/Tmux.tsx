import { useEffect, useState } from "react";
import type { Tab } from "../types";
import TmuxBody from "./TmuxBody";
import TmuxHeader from "./TmuxHeader";

function Tmux({ onDetach }: { onDetach: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [prefix, setPrefix] = useState(false);

  // ターミナルのタイトルのように、タブに合わせてページタイトルを変更
  useEffect(() => {
    document.title = activeTab === 'home' ? 'totosuki: ~' : `totosuki: ~/${activeTab}`;
  }, [activeTab]);

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
      else if (e.key === '3') {
        e.preventDefault();
        setActiveTab('skills');
      }
      else if (e.key === '4') {
        e.preventDefault();
        setActiveTab('career');
      }
      // tmuxのdetachと同じように、Ctrl+B dでターミナルを閉じる
      else if (e.key === 'd') {
        e.preventDefault();
        onDetach();
      }
      setPrefix(false);
    }

    if (prefix) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prefix, onDetach]);

  return (
    <div className='w-full h-[calc(100%-40px)] px-[15px] py-[10px]'>
      <TmuxHeader activeTab={activeTab} setActiveTab={setActiveTab} prefix={prefix} />
      <TmuxBody activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default Tmux;
