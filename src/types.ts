import type { IconType } from "react-icons/lib";

export type Tab = 'home' | 'products' | 'skills';

export type TabState = {
  activeTab: Tab;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
};

export type Icon = {
  icon: IconType | string;
  label: string;
}

export type DescriptionSegment = {
  content: string;
  url?: string;
}

export type Description = DescriptionSegment[];

export type Product = {
  name: string;
  description: Description[];
  url: string;
  period: string;
  skills: Icon[];
};

export type Skill = {
  name: string;
  description: string[];
  star: number;
  icons: Icon[];
};
