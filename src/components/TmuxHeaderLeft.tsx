import type { TabState } from "../types";

function parseHost(): string {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) return 'iphone';
  if (/Android/.test(ua)) return 'android';
  if (/Mac OS X/.test(ua)) return 'mac';
  if (/Windows NT/.test(ua)) return 'win';
  if (/Linux/.test(ua)) return 'linux';
  return 'mac';
}

function TmuxHeaderLeft({ activeTab, setActiveTab }: TabState) {
  const host = parseHost();

  return (
    <div className='flex gap-[1em]'>
      <span className='hidden md:block'>{host} |</span>
      <span
        className={`cursor-pointer ${activeTab !== 'home' ? 'text-gray-500' : ''}`}
        onClick={() => setActiveTab('home')}
      >
        1:home{activeTab === 'home' ? '*' : '-'}
      </span>
      <span
        className={`cursor-pointer ${activeTab !== 'products' ? 'text-gray-500' : ''}`}
        onClick={() => setActiveTab('products')}
      >
        2:products{activeTab === 'products' ? '*' : '-'}
      </span>
      <span
        className={`cursor-pointer ${activeTab !== 'skills' ? 'text-gray-500' : ''}`}
        onClick={() => setActiveTab('skills')}
      >
        3:skills{activeTab === 'skills' ? '*' : '-'}
      </span>
    </div>
  );
}

export default TmuxHeaderLeft;
