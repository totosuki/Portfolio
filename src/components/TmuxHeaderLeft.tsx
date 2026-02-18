import type { TabState } from "../types";

function TmuxHeaderLeft({ activeTab, setActiveTab }: TabState) {
  return (
    <div className='flex gap-[1em]'>
      <span>mac |</span>
      <span
        className={activeTab !== 'home' ? 'text-gray-500' : ''}
        onClick={() => setActiveTab('home')}
      >
        1:home{activeTab === 'home' ? '*' : '-'}
      </span>
      <span
        className={activeTab !== 'products' ? 'text-gray-500' : ''}
        onClick={() => setActiveTab('products')}
      >
        2:product{activeTab === 'products' ? '*' : '-'}
        </span>
    </div>
  );
}

export default TmuxHeaderLeft;
