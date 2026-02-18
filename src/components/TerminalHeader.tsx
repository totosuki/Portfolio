import TerminalHeaderLeft from "./TerminalHeaderLeft";
import TerminalHeaderMiddle from "./TerminalHeaderMiddle";
import TerminalHeaderRight from "./TerminalHeaderRight";

function TerminalHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className='flex flex-row w-full h-[40px] items-center justify-between border-b border-white/20'>
      <TerminalHeaderLeft onClose={onClose} />
      <TerminalHeaderMiddle />
      <TerminalHeaderRight />
    </div>
  );
}

export default TerminalHeader;
