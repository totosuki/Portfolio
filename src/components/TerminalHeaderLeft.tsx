function TerminalHeaderLeft({ onClose }: { onClose: () => void }) {
  return (
    <div className='flex items-center ml-[15px] gap-[10px]'>
      {/* Macbookのボタン風デザイン */}
      <button
        className='w-[15px] h-[15px] rounded-full bg-red-500 cursor-pointer'
        onClick={onClose}
      />
      <button className='w-[15px] h-[15px] rounded-full bg-yellow-500'/>
      <button className='w-[15px] h-[15px] rounded-full bg-green-500'/>
    </div>
  );
}

export default TerminalHeaderLeft;
