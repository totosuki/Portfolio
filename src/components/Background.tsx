import { IoTerminal } from 'react-icons/io5';
import DesktopIcon from './DesktopIcon';
import bg from '../assets/background.webp';

function Background({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      className='absolute z-0 inset-0 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='flex flex-col flex-wrap content-start items-start gap-[10px] h-full p-[30px]'>
        <DesktopIcon label='Terminal' onClick={onOpen}>
          <IoTerminal size={70} color='black' />
        </DesktopIcon>
      </div>
    </div>
  );
}

export default Background;
