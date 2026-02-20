import type { TabState } from '../types';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Skills from '../pages/Skills';

function TmuxBody({ activeTab, setActiveTab }: TabState) {
  const renderPage = () => {
    switch (activeTab) {
      case 'home': return <Home setActiveTab={setActiveTab} />;
      case 'products': return <Products />;
      case 'skills': return <Skills />;
    }
  };

  return (
    <div className='h-[calc(100%-30px)] overflow-y-auto'>
      {renderPage()}
    </div>
  );
}

export default TmuxBody;
