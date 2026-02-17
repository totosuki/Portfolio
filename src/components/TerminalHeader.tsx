import TerminalHeaderLeft from "./TerminalHeaderLeft";
import TerminalHeaderRight from "./TerminalHeaderRight";

function TerminalHeader() {
  return (
    <div
      className='
        w-full h-[40px]
        flex flex-row items-center justify-between
        border-b border-white/20
      '
    >
      <TerminalHeaderLeft />
      <TerminalHeaderRight />
    </div>
  );
}

export default TerminalHeader;
