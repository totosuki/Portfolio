import { SiDocker, SiGnubash, SiMongodb, SiPython } from "react-icons/si";
import type { IconType } from "react-icons/lib";


export const ASCII_TITLE = `  /$$                 /$$                                   /$$       /$$
 | $$                | $$                                  | $$      |__/
/$$$$$$    /$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$$ /$$   /$$| $$   /$$ /$$
|_  $$_/  /$$__  $$|_  $$_/   /$$__  $$ /$$_____/| $$  | $$| $$  /$$/|$$
 | $$    | $$  \\ $$  | $$    | $$  \\ $$|  $$$$$$ | $$  | $$| $$$$$$/ | $$
 | $$ /$$| $$  | $$  | $$ /$$| $$  | $$ \\____  $$| $$  | $$| $$_  $$ | $$
 |  $$$$/|  $$$$$$/  |  $$$$/|  $$$$$$/ /$$$$$$$/|  $$$$$$/| $$ \\  $$| $$
  \\___/   \\______/    \\___/   \\______/ |_______/  \\______/ |__/  \\__/|__/
`;

export type ProductType = {
  name: string;
  description: string[];
  url: string;
  period: string;
  skills: IconType[];
};

export const PRODUCTS: ProductType[] = [
  {
    name: 'Observer Bot',
    description: [
      'Discordサーバー上のメンバーのチャット活動を記録・分析するBot。',
      'ランキング表示やメンバーデータの閲覧など、サーバーの活性度を可視化するコマンドを提供する。',
    ],
    url: 'https://github.com/totosuki/discord-bot-observer',
    period: '2023/11 ~ 2024/02',
    skills: [SiPython, SiDocker, SiMongodb],
  },
  {
    name: 'AtCoder Tester',
    description: [
      '競技プログラミングサイト「AtCoder」における、テスト・提出作業を自動化するCLIツール。',
      'att test / att submit コマンド一つで、取得・実行・比較・提出まで完結できる。'
    ],
    url: 'https://github.com/totosuki/AtCoder-Tester',
    period: '2023/07 ~ 2023/08',
    skills: [SiPython, SiGnubash],
  },
];
