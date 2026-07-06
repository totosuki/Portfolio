import Clock from "./Clock";

function TmuxHeaderRight({ prefix }: { prefix: boolean }) {
  return (
    <div className='hidden md:flex items-center gap-[10px]'>
      {/* tmux-prefix-highlight風のインジケータ */}
      { prefix && <span className='bg-yellow-500 text-black px-[8px]'>^B</span> }
      <p>
        <Clock />
      </p>
    </div>
  );
}

export default TmuxHeaderRight;
