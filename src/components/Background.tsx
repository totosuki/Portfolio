import { useState } from 'react';
import { IoCalculator, IoDocumentText, IoTerminal } from 'react-icons/io5';
import { SiGithub, SiX, SiYoutube } from 'react-icons/si';
import Calculator from './Calculator';
import DesktopIcon from './DesktopIcon';
import Note from './Note';
import bg from '../assets/background.webp';

function openLink(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

function Background({ onOpen }: { onOpen: () => void }) {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  return (
    <div
      className='absolute z-0 inset-0 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='flex flex-col flex-wrap content-start items-start gap-[10px] h-full p-[30px]'>
        <DesktopIcon label='Terminal' onClick={onOpen}>
          <IoTerminal size={70} color='black' />
        </DesktopIcon>
        <DesktopIcon label='X' onClick={() => openLink('https://x.com/totosuki_')}>
          <SiX size={60} color='black' />
        </DesktopIcon>
        <DesktopIcon label='YouTube' onClick={() => openLink('https://www.youtube.com/')}>
          <SiYoutube size={60} color='black' />
        </DesktopIcon>
        <DesktopIcon label='GitHub' onClick={() => openLink('https://github.com/totosuki')}>
          <SiGithub size={60} color='black' />
        </DesktopIcon>
        <DesktopIcon label='Calculator' onClick={() => setIsCalculatorOpen(true)}>
          <IoCalculator size={70} color='black' />
        </DesktopIcon>
        <DesktopIcon label='note.txt' onClick={() => setIsNoteOpen(true)}>
          <IoDocumentText size={70} color='black' />
        </DesktopIcon>
      </div>
      { isCalculatorOpen && <Calculator onClose={() => setIsCalculatorOpen(false)} /> }
      { isNoteOpen && <Note onClose={() => setIsNoteOpen(false)} /> }
    </div>
  );
}

export default Background;
