import DesktopWindow from './DesktopWindow';

const NOTE_CONTENT = `# note.txt

Terminalの中ではtmuxの
キーバインドが使える

  Ctrl+B → 1..4 : タブ切替
  Ctrl+B → d    : デタッチ

ボタンの機能
  赤 : 閉じる
  黄 : ウィンドウ化
  緑 : フルスクリーン
`;

function Note({ onClose }: { onClose: () => void }) {
  return (
    <DesktopWindow title='note.txt' initialX={220} initialY={140} onClose={onClose}>
      <pre className='p-[20px] text-xs md:text-sm leading-relaxed'>{NOTE_CONTENT}</pre>
    </DesktopWindow>
  );
}

export default Note;
