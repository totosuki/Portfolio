import TerminalHeader from "./TerminalHeader";
import Tmux from "./Tmux";

function TerminalWindow() {
  return (
    <div
      className='
        w-full h-full
        bg-black/80
        border border-white/10
        backdrop-blur-md
        rounded-[20px]
        shadow-[0_30px_80px_rgba(0,0,0,0.8)]
      '
    >
      <TerminalHeader />
      <Tmux />
    </div>
  );
}

export default TerminalWindow;
