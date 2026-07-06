function TerminalHeaderLeft({ onClose, onMinimize }: { onClose: () => void; onMinimize: () => void }) {
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      // iOSのSafariなど、フルスクリーン非対応の環境では何もしない
      document.documentElement.requestFullscreen?.().catch(() => {});
    }
    else {
      document.exitFullscreen();
    }
  };

  return (
    <div className='flex items-center ml-[15px] gap-[10px]'>
      {/* Macbookのボタン風デザイン */}
      <button
        aria-label='Close'
        className='w-[15px] h-[15px] rounded-full bg-red-500 cursor-pointer'
        onClick={onClose}
      />
      <button
        aria-label='Minimize'
        className='w-[15px] h-[15px] rounded-full bg-yellow-500 cursor-pointer'
        onClick={onMinimize}
      />
      <button
        aria-label='Fullscreen'
        className='w-[15px] h-[15px] rounded-full bg-green-500 cursor-pointer'
        onClick={handleFullscreen}
      />
    </div>
  );
}

export default TerminalHeaderLeft;
