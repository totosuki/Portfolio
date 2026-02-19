import { FaAws } from "react-icons/fa";
import { SiArduino, SiCplusplus, SiCss3, SiDocker, SiGnubash, SiHomebrew, SiHtml5, SiJavascript, SiMongodb, SiNginx, SiPython, SiRaspberrypi, SiReact, SiRust, SiTypescript } from "react-icons/si";
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
    name: 'Portfolio',
    description: [
      'ターミナル風のデザインにこだわった個人ポートフォリオサイト。',
      'tmuxライクなUIをReact + TypeScriptで表現した。'
    ],
    url: 'https://github.com/totosuki/Portfolio',
    period: '2026/02 ~ now',
    skills: [SiReact, SiTypescript],
  },
  {
    name: 'PySight',
    description: [
      'Pythonに関する知見をまとめた個人技術サイト「PySight」。',
      'GitHub Pagesを利用し、pysight.devにてホスティングしている。'
    ],
    url: 'https://github.com/totosuki/totosuki.github.io',
    period: '2024/11 ~ now',
    skills: [SiHtml5, SiCss3, SiJavascript, SiPython],
  },
  {
    name: 'Matrix Stream',
    description: [
      'PC上の画像や動画を、8x8のドットマトリクスLEDにストリーミング表示するシステム。',
      'SenderがTCP経由でフレームデータを送信し、Raspberry Pi上のReceiverがシフトレジスタを通じてLED制御する。'
    ],
    url: 'https://github.com/totosuki/matrix-stream',
    period: '2025/06 ~ 2025/07',
    skills: [SiRust, SiRaspberrypi],
  },
  {
    name: 'lchat',
    description: [
      'LAN上で動作するRust製のTUIチャットアプリ。',
      'TCPサーバーとcrosstermを使ったターミナルクライアントの2バイナリ構成で、マルチスレッドによるリアルタイム通信が可能。'
    ],
    url: 'https://github.com/totosuki/lchat',
    period: '2025/06 ~ 2025/07',
    skills: [SiRust],
  },
  {
    name: 'homehome',
    description: [
      'ログイン不要・完全匿名で「1日1回、誰かの褒め言葉を受け取り、1日1回、誰かを褒める言葉を投稿する」Webアプリ。',
      '友人と2人で設計・開発し、homehome.helpにてリリースし、半年間に渡って継続的に保守・運用した。'
    ],
    url: 'https://github.com/totosuki/homehome',
    period: '2025/03 ~ 2025/04',
    skills: [SiHtml5, SiCss3, SiJavascript, SiPython, SiDocker, SiNginx, FaAws],
  },
  {
    name: 'jmp',
    description: [
      'ディレクトリの移動を高速化するHomebrew対応CLIツール。',
      'ディレクトリ一覽をキャッシュしておき、曖昧な検索で目的のディレクトリへ移動できる。',
      'tmux環境にも対応しており、fdコマンドが利用可能な場合はより高速なキャッシュ更新が可能。'
    ],
    url: 'https://github.com/totosuki/homebrew-jmp',
    period: '2024/11',
    skills: [SiGnubash, SiHomebrew],
  },
  {
    name: 'Arduino Player',
    description: [
      'Arduinoを使って複数の楽曲を演奏するミュージックプレイヤー。',
      'ロータリースイッチとボタンで曲を選択し、OLEDディスプレイに曲名と再生時間がリアルタイムで表示される。',
      '収録楽曲: ドラゴンクエスト序曲、Shape of You、MEGALOVANIA、You'
    ],
    url: 'https://github.com/totosuki/arduino-player',
    period: '2024/10',
    skills: [SiCplusplus, SiArduino],
  },
  {
    name: 'XMR Bot',
    description: [
      'Monero（XMR）のマイニングプール「nanopool」の採掘状況をDiscord上で確認できるBot。',
      'ウォレットアドレス・残高・ハッシュレート・採掘メンバーなどをスラッシュコマンドで表示できる。'
    ],
    url: 'https://github.com/totosuki/xmr-bot',
    period: '2024/06 ~ 2024/10',
    skills: [SiPython],
  },
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
