import bg from '../assets/background.jpg';

function Background() {
  return (
    <div
      className='
        absolute
        z-0 inset-0
        bg-cover bg-center bg-no-repeat
      '
      style={{ backgroundImage: `url(${bg})` }}
    >
    </div>
  );
}

export default Background;
