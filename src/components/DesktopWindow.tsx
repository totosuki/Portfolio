import { useRef, useState } from 'react';
import type { ReactNode } from 'react';

function DesktopWindow({ title, initialX, initialY, onClose, children }: {
  title: string;
  initialX: number;
  initialY: number;
  onClose: () => void;
  children: ReactNode;
}) {
  // スマホでも画面外に出ないように初期位置をクランプする
  const [position, setPosition] = useState({
    x: Math.max(10, Math.min(initialX, window.innerWidth - 300)),
    y: initialY,
  });
  const dragOffset = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragOffset.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragOffset.current) return;
    setPosition({
      x: Math.max(0, e.clientX - dragOffset.current.x),
      y: Math.max(0, e.clientY - dragOffset.current.y),
    });
  };

  const handlePointerUp = () => {
    dragOffset.current = null;
  };

  return (
    <div
      className='absolute z-[5] max-w-[calc(100vw-20px)] bg-black/80 border border-white/10 backdrop-blur-md rounded-[20px] shadow-[0_30px_80px_rgba(0,0,0,0.8)] animate-fadein'
      style={{ left: position.x, top: position.y }}
    >
      <div
        className='flex items-center h-[40px] border-b border-white/20 cursor-grab touch-none select-none'
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <button
          aria-label='Close'
          className='w-[15px] h-[15px] ml-[15px] rounded-full bg-red-500 cursor-pointer'
          onClick={onClose}
          onPointerDown={(e) => e.stopPropagation()}
        />
        <p className='absolute left-1/2 -translate-x-1/2'>{title}</p>
      </div>
      {children}
    </div>
  );
}

export default DesktopWindow;
