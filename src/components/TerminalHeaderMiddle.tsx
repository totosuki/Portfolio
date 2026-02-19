function parseHost(): string {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) return 'iPhone';
  if (/Android/.test(ua)) return 'Android';
  if (/Mac OS X/.test(ua)) return 'MacBook';
  if (/Windows NT/.test(ua)) return 'Windows';
  if (/Linux/.test(ua)) return 'Linux';
  return 'Unknown';
}

function parseBrowser(): string {
  const ua = navigator.userAgent;
  if (/Edg\/|Edge\//.test(ua)) return 'Edge';
  if (/OPR\/|Opera/.test(ua)) return 'Opera';
  if (/Chrome\//.test(ua)) return 'Chrome';
  if (/Safari\//.test(ua)) return 'Safari';
  if (/FireFox\//.test(ua)) return 'Firefox';
  return 'Unknown';
}

function TerminalHeaderMiddle() {
  const host = parseHost();
  const browser = parseBrowser();
  const resolution = `${window.screen.width}x${window.screen.height}`;
  const locale = navigator.language;

  return (
    <div>
      <span>totosuki</span>
      <span>@{host}</span>
      <span className='hidden md:inline'> | {browser}</span>
      <span className='hidden md:inline'> | {resolution}</span>
      <span className='hidden md:inline'> | {locale}</span>
    </div>
  );
}

export default TerminalHeaderMiddle;
