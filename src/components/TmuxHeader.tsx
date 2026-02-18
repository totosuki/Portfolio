import type { TabState } from "../types";
import TmuxHeaderLeft from "./TmuxHeaderLeft";
import TmuxHeaderRight from "./TmuxHeaderRight";

function TmuxHeader({ activeTab, setActiveTab }: TabState) {
  return (
    <div className='w-full h-[30px] flex items-center justify-between'>
      <TmuxHeaderLeft activeTab={activeTab} setActiveTab={setActiveTab} />
      <TmuxHeaderRight />
    </div>
  );
}

export default TmuxHeader;
