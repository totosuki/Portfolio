import TmuxBody from "./TmuxBody";
import TmuxHeader from "./TmuxHeader";

function Tmux() {
  return (
    <div className='w-full h-[calc(100%-40px)] px-[15px] py-[10px]'>
      <TmuxHeader />
      <TmuxBody />
    </div>
  );
}

export default Tmux;
