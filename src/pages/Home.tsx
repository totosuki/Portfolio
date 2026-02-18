import { FaLastfm } from "react-icons/fa";
import { IoBrushOutline } from "react-icons/io5";
import github from '../assets/github.svg';
import icon from '../assets/icon.jpg';
import x from '../assets/x.svg';
import { ASCII_TITLE } from "../constants";

function AsciiTitle() {
  return (
    <div>
      <pre className='leading-none'>{ASCII_TITLE}</pre>
    </div>
  );
}

function AboudMe() {
  return (
    <div>
      <p className='text-4xl mb-[20px]'>About me</p>
      <div className='flex items-center ml-[20px] gap-[40px]'>
        <img
          src={icon}
          alt='icon'
          className='w-[250px] h-[250px] rounded-full object-cover'
        />
        <div className='flex-col w-[450px]'>
          <p className='text-2xl mb-[20px]'>Akari Enomoto</p>
          <p>
            情報工学系の大学2年生。<br/>
            中学生のころゲーム制作に憧れてプログラミングを始め、高校では機械学習・競技プログラミング・Bot開発などに取り組んだ。大学ではWebアプリ・CLIツール・セキュリティ・組み込みと、興味の向くままに幅広く手を動かしている。
          </p>
        </div>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div>
      <p className='text-4xl mb-[20px]'>Links</p>
      <div className='flex flex-col gap-[10px] ml-[20px]'>
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
  );
}

function Home() {
  return (
    <div className='flex flex-col px-[30px] py-[20px] gap-[30px]'>
      <AsciiTitle />
      <AboudMe />
      <Links />
    </div>
  );
}

export default Home;
