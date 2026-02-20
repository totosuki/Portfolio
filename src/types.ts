export type Tab = 'home' | 'products' | 'skills';

export type TabState = {
  activeTab: Tab;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
};
