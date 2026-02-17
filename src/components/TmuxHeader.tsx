import TmuxHeaderLeft from "./TmuxHeaderLeft";
import TmuxHeaderRight from "./TmuxHeaderRight";

function TmuxHeader() {
  return (
    <div className='w-full h-[30px] flex items-center justify-between'>
      <TmuxHeaderLeft />
      <TmuxHeaderRight />
    </div>
  );
}

export default TmuxHeader;
