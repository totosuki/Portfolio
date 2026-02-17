import TerminalHeader from "./TerminalHeader";

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
    </div>
  );
}

export default TerminalWindow;
