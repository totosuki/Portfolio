export type Tab = 'home' | 'products';

export type TabState = {
  activeTab: Tab;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
};
