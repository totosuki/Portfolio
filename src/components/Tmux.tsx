import { useState } from "react";
import type { Tab } from "../types";
import TmuxBody from "./TmuxBody";
import TmuxHeader from "./TmuxHeader";

function Tmux() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className='w-full h-[calc(100%-40px)] px-[15px] py-[10px]'>
      <TmuxHeader />
      <TmuxBody activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default Tmux;
