import { useState, useEffect } from "react";

const formatTime = () => {
  const now = new Date();
  const yyyy = now.getFullYear();
  const MM = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  return `${yyyy}/${MM}/${dd} ${hh}:${mm}:${ss}`;
}

function Clock() {
  // 初回レンダリング時のみformatTime関数が実行される
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime());
    }, 1000);

    // クリーンアップ
    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
}

export default Clock;
