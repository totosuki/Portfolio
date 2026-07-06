import { useState } from "react";
import TerminalHeader from "./TerminalHeader";
import Tmux from "./Tmux";

function Terminal({ onClose }: { onClose: () => void }) {
  const [isWindowed, setIsWindowed] = useState(false);

  return (
    <div className={`absolute z-10 bg-black/80 border border-white/10 backdrop-blur-md rounded-[20px] shadow-[0_30px_80px_rgba(0,0,0,0.8)] animate-fadein transition-all duration-300 ${isWindowed ? 'inset-[15px] md:inset-[60px]' : 'inset-0'}`}>
      <TerminalHeader onClose={onClose} onMinimize={() => setIsWindowed(!isWindowed)} />
      <Tmux onDetach={onClose} />
    </div>
  );
}

export default Terminal;
