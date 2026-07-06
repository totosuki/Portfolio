import type { ReactNode } from 'react';

function DesktopIcon({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <div
      className='flex flex-col items-center justify-center w-[100px] h-[100px] rounded-[10px] cursor-pointer select-none hover:bg-white/30 transition-colors'
      onClick={onClick}
    >
      {children}
      <p>{label}</p>
    </div>
  );
}

export default DesktopIcon;
