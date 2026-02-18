import { IoTerminal } from 'react-icons/io5';
import bg from '../assets/background.jpg';

function Background({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      className='absolute z-0 inset-0 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='m-[30px]'>
        <div
          className='flex flex-col items-center w-[100px] h-[100px] cursor-pointer'
          onClick={onOpen}
        >
          <IoTerminal size={70} color='black'/>
          <p>Terminal</p>
        </div>
      </div>
    </div>
  );
}

export default Background;
