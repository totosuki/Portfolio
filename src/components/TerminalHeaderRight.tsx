import github from '../assets/github.svg';

function TerminalHeaderRight() {
  return (
    <div className='flex items-center mr-[15px]'>
      <a
        href='https://github.com/totosuki'
        target='_blank'
        className='invert'
      >
        <img
          src={github}
          alt='GitHub'
          className='w-[20px] h-[20px] rounded-full'
        >
        </img>
      </a>
    </div>
  );
}

export default TerminalHeaderRight;
