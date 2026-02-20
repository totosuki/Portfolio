import { FaAws } from "react-icons/fa";
import { SiArduino, SiBurpsuite, SiC, SiCplusplus, SiCss3, SiDocker, SiDotnet, SiGit, SiGithub, SiGnubash, SiHomebrew, SiHtml5, SiJavascript, SiLinux, SiMongodb, SiMysql, SiNginx, SiPython, SiRaspberrypi, SiReact, SiRust, SiTypescript, SiUbuntu, SiUnity } from "react-icons/si";
import type { Product, Skill } from "./types";
import atcoder from './assets/atcoder.png';


export const ASCII_TITLE = `  /$$                 /$$                                   /$$       /$$
 | $$                | $$                                  | $$      |__/
/$$$$$$    /$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$$ /$$   /$$| $$   /$$ /$$
|_  $$_/  /$$__  $$|_  $$_/   /$$__  $$ /$$_____/| $$  | $$| $$  /$$/|$$
 | $$    | $$  \\ $$  | $$    | $$  \\ $$|  $$$$$$ | $$  | $$| $$$$$$/ | $$
 | $$ /$$| $$  | $$  | $$ /$$| $$  | $$ \\____  $$| $$  | $$| $$_  $$ | $$
 |  $$$$/|  $$$$$$/  |  $$$$/|  $$$$$$/ /$$$$$$$/|  $$$$$$/| $$ \\  $$| $$
  \\___/   \\______/    \\___/   \\______/ |_______/  \\______/ |__/  \\__/|__/
`;

export const PRODUCTS: Product[] = [
  {
    name: 'Portfolio',
    description: [
      [
        { content: 'ターミナル風のデザインにこだわった個人ポートフォリオサイト。' }
      ],
      [
        { content: 'tmuxライクなUIをReact + TypeScriptで表現した。' }
      ],
    ],
    url: 'https://github.com/totosuki/Portfolio',
    period: '2026/02 ~ now',
    skills: [
      { icon: SiReact, label: 'React' },
      { icon: SiTypescript, label: 'TypeScript' }
    ],
  },
  {
    name: 'PySight',
    description: [
      [
        { content: 'Pythonに関する知見をまとめた個人技術サイト「PySight」。' }
      ],
      [
        { content: 'GitHub Pagesを利用し、' },
        { content: 'pysight.dev', url: 'https://pysight.dev/' },
        { content: 'にてホスティングしている。' }
      ]
    ],
    url: 'https://github.com/totosuki/totosuki.github.io',
    period: '2024/11 ~ now',
    skills: [
      { icon: SiHtml5, label: 'HTML' },
      { icon: SiCss3, label: 'CSS' },
      { icon: SiJavascript, label: 'JavaScript' },
    ],
  },
  {
    name: 'Matrix Stream',
    description: [
      [{ content: 'PC上の画像や動画を、8x8のドットマトリクスLEDにストリーミング表示するシステム。' }],
      [{ content: 'SenderがTCP経由でフレームデータを送信し、Raspberry Pi上のReceiverがシフトレジスタを通じてLED制御する。' }],
    ],
    url: 'https://github.com/totosuki/matrix-stream',
    period: '2025/06 ~ 2025/07',
    skills: [
      { icon: SiRust, label: 'Rust' },
      { icon: SiRaspberrypi, label: 'Raspberry Pi' },
    ],
  },
  {
    name: 'lchat',
    description: [
      [{ content: 'LAN上で動作するRust製のTUIチャットアプリ。' }],
      [{ content: 'TCPサーバーとcrosstermを使ったターミナルクライアントの2バイナリ構成で、マルチスレッドによるリアルタイム通信が可能。' }],
    ],
    url: 'https://github.com/totosuki/lchat',
    period: '2025/06 ~ 2025/07',
    skills: [
      { icon: SiRust, label: 'Rust' },
    ],
  },
  {
    name: 'homehome',
    description: [
      [{ content: 'ログイン不要・完全匿名で「1日1回、誰かの褒め言葉を受け取り、1日1回、誰かを褒める言葉を投稿する」Webアプリ。' }],
      [{ content: '友人と2人で設計・開発し、homehome.helpにてリリースし、半年間に渡って継続的に保守・運用した。' }],
    ],
    url: 'https://github.com/totosuki/homehome',
    period: '2025/03 ~ 2025/04',
    skills: [
      { icon: SiPython, label: 'Python' },
      { icon: SiDocker, label: 'Docker' },
      { icon: SiNginx, label: 'Nginx' },
      { icon: FaAws, label: 'AWS' },
    ],
  },
  {
    name: 'jmp',
    description: [
      [{ content: 'ディレクトリの移動を高速化するHomebrew対応CLIツール。' }],
      [{ content: 'ディレクトリ一覽をキャッシュしておき、曖昧な検索で目的のディレクトリへ移動できる。' }],
      [{ content: 'tmux環境にも対応しており、fdコマンドが利用可能な場合はより高速なキャッシュ更新が可能。' }],
    ],
    url: 'https://github.com/totosuki/homebrew-jmp',
    period: '2024/11',
    skills: [
      { icon: SiGnubash, label: 'Bash' },
      { icon: SiHomebrew, label: 'Homebrew' },
    ],
  },
  {
    name: 'Arduino Player',
    description: [
      [{ content: 'Arduinoを使って複数の楽曲を演奏するミュージックプレイヤー。' }],
      [{ content: 'ロータリースイッチとボタンで曲を選択し、OLEDディスプレイに曲名と再生時間がリアルタイムで表示される。' }],
      [{ content: '収録楽曲: ドラゴンクエスト序曲、Shape of You、MEGALOVANIA、You' }],
    ],
    url: 'https://github.com/totosuki/arduino-player',
    period: '2024/10',
    skills: [
      { icon: SiCplusplus, label: 'C++' },
      { icon: SiArduino, label: 'Arduino' },
    ],
  },
  {
    name: 'XMR Bot',
    description: [
      [{ content: 'Monero（XMR）のマイニングプール「nanopool」の採掘状況をDiscord上で確認できるBot。' }],
      [{ content: 'ウォレットアドレス・残高・ハッシュレート・採掘メンバーなどをスラッシュコマンドで表示できる。' }],
    ],
    url: 'https://github.com/totosuki/xmr-bot',
    period: '2024/06 ~ 2024/10',
    skills: [
      { icon: SiPython, label: 'Python' },
    ],
  },
  {
    name: 'Observer Bot',
    description: [
      [{ content: 'Discordサーバー上のメンバーのチャット活動を記録・分析するBot。' }],
      [{ content: 'ランキング表示やメンバーデータの閲覧など、サーバーの活性度を可視化するコマンドを提供する。' }],
    ],
    url: 'https://github.com/totosuki/discord-bot-observer',
    period: '2023/11 ~ 2024/02',
    skills: [
      { icon: SiPython, label: 'Python' },
      { icon: SiDocker, label: 'Docker' },
      { icon: SiMongodb, label: 'MongoDB' },
    ],
  },
  {
    name: 'AtCoder Tester',
    description: [
      [{ content: '競技プログラミングサイト「AtCoder」における、テスト・提出作業を自動化するCLIツール。' }],
      [{ content: 'att test / att submit コマンド一つで、取得・実行・比較・提出まで完結できる。' }],
    ],
    url: 'https://github.com/totosuki/AtCoder-Tester',
    period: '2023/07 ~ 2023/08',
    skills: [
      { icon: SiPython, label: 'Python' },
      { icon: SiGnubash, label: 'Bash' },
    ],
  },
];

export const SKILLS: Skill[] = [
  {
    name: 'Python',
    description: [
      'Python (CPython) へのContribute経験あり。',
      'Pythonに関する技術サイト「PySight」を運営している。',
      '機械学習・Bot開発・Webアプリ・CLIアプリなどの様々なプログラムで使用経験があり、私が最も好きなプログラミング言語。',
    ],
    star: 5,
    icons: [
      { icon: SiPython, label: 'Python' },
    ],
  },
  {
    name: 'C#',
    description: [
      '中学2年生のころゲーム開発でC#に入門し、オブジェクト指向の基礎をここで身につけた。',
      '長期インターンでは約半年間、Windows Formsアプリの実務開発に従事した。',
    ],
    star: 5,
    icons: [
      { icon: SiDotnet, label: '.NET' },
    ],
  },
  {
    name: 'Linux',
    description: [
      '2年以上Ubuntuをメインの開発環境として使用しており、CLIでの作業が基本スタイル。',
      'VPSへのサーバー構築・サービスのデプロイ・ネットワーク疎通確認など、実務的なLinux操作を経験している。',
    ],
    star: 5,
    icons: [
      { icon: SiLinux, label: 'Linux' },
      { icon: SiUbuntu, label: 'Ubuntu' },
    ],
  },
  {
    name: 'Git / GitHub',
    description: [
      'すべての個人プロジェクトで使用しており、日常的に扱っている。',
      'OSSへのコントリビュート実績があるほか、Issue/PRを活用した共同開発やGitHub ActionsによるCI/CD構築も経験している。',
    ],
    star: 3,
    icons: [
      { icon: SiGit, label: 'Git' },
      { icon: SiGithub, label: 'GitHub' },
    ],
  },
  {
    name: 'Algorithm',
    description: [
      '高校時代に競技プログラミングに取り組み、計算量解析・データ構造・グラフ探索などのアルゴリズムの基礎を習得した。',
      'AtCoderのレートは1100 (緑色)。(https://atcoder.jp/users/totosuki)'
    ],
    star: 4,
    icons: [
      { icon: atcoder, label: 'AtCoder' },
    ],
  },
  {
    name: 'AWK',
    description: [
      '長期インターンで社内の既存AWKプログラムを読み解き、調査書としてドキュメント化する業務を通じて習得した。',
    ],
    star: 4,
    icons: [
      { icon: SiGnubash, label: 'AWK' },
    ],
  },
  {
    name: 'C / C++',
    description: [
      '大学の講義でメモリ管理やポインタ操作などの基礎的な文法を習得した。',
      'Arduinoの組み込み開発や自作コンパイラ作成で使用した経験がある。',
    ],
    star: 4,
    icons: [
      { icon: SiC, label: 'C' },
      { icon: SiCplusplus, label: 'C++' },
    ],
  },
  {
    name: 'HTML / CSS / JavaScript',
    description: [
      'PySight（個人技術サイト）の開発や、で使用。バニラJSによるDOM操作やCSSアニメーションの実装経験がある。',
    ],
    star: 4,
    icons: [
      { icon: SiHtml5, label: 'HTML' },
      { icon: SiCss3, label: 'CSS' },
      { icon: SiJavascript, label: 'JavaScript' },
    ],
  },
  {
    name: 'TypeScript / React',
    description: [
      'このポートフォリオサイトをはじめ、React + TypeScriptを用いたWebアプリ開発に取り組んでいる。',
      '型安全なコンポーネント設計やhooksを活用した状態管理を実践している。',
    ],
    star: 4,
    icons: [
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: SiReact, label: 'React' },
    ],
  },
  {
    name: 'Docker',
    description: [
      'homehomeやObserver Botの運用でDocker Composeを用いたコンテナ管理を経験。',
      '開発・本番環境の統一やサービスの依存関係管理に活用している。',
    ],
    star: 3,
    icons: [
      { icon: SiDocker, label: 'Docker' },
    ],
  },
  {
    name: 'Rust',
    description: [
      'Matrix StreamやlchatなどのCLI・組み込みプロジェクトで使用。所有権・借用・ライフタイムの概念を理解している。',
    ],
    star: 3,
    icons: [
      { icon: SiRust, label: 'Rust' },
    ],
  },
  {
    name: 'ShellScript',
    description: [
      'jmpやAtCoder Testerの開発でBashスクリプトを実装。ファイル操作・プロセス管理・パイプを活用した自動化ができる。',
    ],
    star: 3,
    icons: [
      { icon: SiGnubash, label: 'Bash' },
    ],
  },
  {
    name: 'Unity',
    description: [
      'ゲーム開発への憧れからプログラミングを始めたきっかけの環境。2Dゲームの制作経験がある。',
    ],
    star: 3,
    icons: [
      { icon: SiUnity, label: 'Unity' },
    ],
  },
  {
    name: 'AWS',
    description: [
      'homehomeのEC2を用いたサーバー運用で使用。基本的なインスタンス管理やセキュリティグループの設定ができる。',
    ],
    star: 2,
    icons: [
      { icon: FaAws, label: 'AWS' },
    ],
  },
  {
    name: 'Burp Suite',
    description: [
      'Webセキュリティの学習目的で使用。プロキシを用いたHTTPリクエストの傍受・改ざんの基礎を理解している。',
    ],
    star: 2,
    icons: [
      { icon: SiBurpsuite, label: 'Burp Suite' },
    ],
  },
  {
    name: 'MySQL / MongoDB',
    description: [
      'Observer BotでMongoDBを、学習目的でMySQLを使用。基本的なCRUD操作とスキーマ設計ができる。',
    ],
    star: 2,
    icons: [
      { icon: SiMysql, label: 'MySQL' },
      { icon: SiMongodb, label: 'MongoDB' },
    ],
  },
  {
    name: 'Nginx',
    description: [
      'homehomeのリバースプロキシとしてDocker Compose環境内で設定・運用した経験がある。',
    ],
    star: 2,
    icons: [
      { icon: SiNginx, label: 'Nginx' },
    ],
  },
];
