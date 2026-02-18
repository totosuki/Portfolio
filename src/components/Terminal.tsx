import TerminalHeader from "./TerminalHeader";
import Tmux from "./Tmux";

function Terminal({ onClose }: { onClose: () => void }) {
  return (
    <div className='absolute z-10 inset-0 w-full h-full bg-black/80 border border-white/10 backdrop-blur-md rounded-[20px] shadow-[0_30px_80px_rgba(0,0,0,0.8)] animate-fadein'>
      <TerminalHeader onClose={onClose} />
      <Tmux />
    </div>
  );
}

export default Terminal;
