import { FaLastfm } from "react-icons/fa";
import { IoBrushOutline } from "react-icons/io5";
import github from '../assets/github.svg';
import icon from '../assets/icon.jpg';
import x from '../assets/x.svg';

function Home() {
  return (
    <div className='px-[30px]'>
      <div className='py-[30px]'>
        <pre className='leading-none'>
{`  /$$                 /$$                                   /$$       /$$
 | $$                | $$                                  | $$      |__/
/$$$$$$    /$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$$ /$$   /$$| $$   /$$ /$$
|_  $$_/  /$$__  $$|_  $$_/   /$$__  $$ /$$_____/| $$  | $$| $$  /$$/|$$
 | $$    | $$  \\ $$  | $$    | $$  \\ $$|  $$$$$$ | $$  | $$| $$$$$$/ | $$
 | $$ /$$| $$  | $$  | $$ /$$| $$  | $$ \\____  $$| $$  | $$| $$_  $$ | $$
 |  $$$$/|  $$$$$$/  |  $$$$/|  $$$$$$/ /$$$$$$$/|  $$$$$$/| $$ \\  $$| $$
  \\___/   \\______/    \\___/   \\______/ |_______/  \\______/ |__/  \\__/|__/
`}
        </pre>
      </div>

      <div className='py-[20px]'>
        <p className='text-4xl'>About me</p>
        <div className='flex items-center'>
          <img
            src={icon}
            alt='icon'
            className='w-[250px] h-[250px] p-[20px] rounded-full object-cover'
          />
          <div className='flex-col w-[450px] pl-[20px]'>
            <p className='text-2xl pb-[10px]'>Akari Enomoto</p>
            <p>
              情報工学系の大学2年生。<br/>
              中学生のころゲーム制作に憧れてプログラミングを始め、高校では機械学習・競技プログラミング・Bot開発などに取り組んだ。大学ではWebアプリ・CLIツール・セキュリティ・組み込みと、興味の向くままに幅広く手を動かしている。
            </p>
          </div>
        </div>
      </div>

      <div className='py-[20px]'>
        <p className='text-4xl pb-[20px]'>Link</p>
        <div className='ml-[20px]'>
          <div className='flex flex-col gap-[10px]'>
            <a href='https://x.com/totosuki_' target='_blank' className='flex gap-[20px] items-center hover:underline'>
              <img src={x} alt='X' className='w-[20px] h-[20px]' />
              <p>X (旧Twitter) : https://x.com/totosuki_</p>
            </a>
            <a href='https://github.com/totosuki' target='_blank' className='flex gap-[20px] items-center hover:underline'>
              <img src={github} alt='GitHub' className='w-[20px] h-[20px] invert' />
              <p>GitHub : https://github.com/totosuki</p>
            </a>
            <a href='https://last.fm/user/totosuki' target='_blank' className='flex gap-[20px] items-center hover:underline'>
              <FaLastfm size={20} />
              <p>Last.fm : https://last.fm/user/totosuki</p>
            </a>
            <a href='https://pysight.dev/' target='_blank' className='flex gap-[20px] items-center hover:underline'>
              <IoBrushOutline size={20} />
              <p>My Python Site : https://pysight.dev/</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
