import type { TabState } from "../types";

function TmuxHeaderLeft({ activeTab, setActiveTab }: TabState) {
  return (
    <div className='flex gap-[1em]'>
      <span className='hidden md:block'>mac |</span>
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
