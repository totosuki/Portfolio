import TerminalHeaderLeft from "./TerminalHeaderLeft";
import TerminalHeaderMiddle from "./TerminalHeaderMiddle";
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
      <TerminalHeaderMiddle />
      <TerminalHeaderRight />
    </div>
  );
}

export default TerminalHeader;
