import icon from '../assets/icon.jpg';

function Home() {
  return (
    <div className='px-[30px]'>
      <div className='pt-[30px] pb-[50px]'>
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

      <div className='pb-[50px]'>
        <p className='text-4xl'>About me</p>
        <div className='flex items-center'>
          <img
            src={icon}
            alt='icon'
            className='w-[250x] h-[250px] p-5 rounded-full object-cover'
          />
          <div className='flex-col w-[450px]'>
            <p className='text-2xl pb-[10px]'>Akari Enomoto</p>
            <p>
              情報工学系の大学2年生。<br/>
              中学生のころゲーム制作に憧れてプログラミングを始め、高校では機械学習・競技プログラミング・Bot開発などに取り組んだ。大学ではWebアプリ・CLIツール・セキュリティ・組み込みと、興味の向くままに幅広く手を動かしている。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
