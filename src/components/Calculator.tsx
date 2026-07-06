import { useState } from 'react';
import DesktopWindow from './DesktopWindow';

// 浮動小数点誤差で表示が崩れないように丸める
function format(value: number): string {
  return String(parseFloat(value.toPrecision(12)));
}

function calculate(a: number, b: number, operator: string): number {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '×': return a * b;
    case '÷': return a / b;
    default: return b;
  }
}

function CalcButton({ label, wide, onClick }: { label: string; wide?: boolean; onClick: () => void }) {
  return (
    <button
      className={`h-[45px] rounded-[10px] bg-white/10 hover:bg-white/25 transition-colors cursor-pointer ${wide ? 'col-span-2' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function Calculator({ onClose }: { onClose: () => void }) {
  const [display, setDisplay] = useState('0');
  const [operand, setOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  // 直前の入力が演算子で、次の数字入力で表示をリセットするかどうか
  const [waiting, setWaiting] = useState(false);

  const inputDigit = (digit: string) => {
    if (waiting) {
      setDisplay(digit);
      setWaiting(false);
    }
    else if (display.length < 12) {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDot = () => {
    if (waiting) {
      setDisplay('0.');
      setWaiting(false);
    }
    else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setOperand(null);
    setOperator(null);
    setWaiting(false);
  };

  const applyOperator = (nextOperator: string) => {
    const value = parseFloat(display);
    if (operand !== null && operator && !waiting) {
      const result = calculate(operand, value, operator);
      setDisplay(format(result));
      setOperand(result);
    }
    else {
      setOperand(value);
    }
    setOperator(nextOperator);
    setWaiting(true);
  };

  const equals = () => {
    if (operand === null || !operator) return;
    const result = calculate(operand, parseFloat(display), operator);
    setDisplay(format(result));
    setOperand(null);
    setOperator(null);
    setWaiting(true);
  };

  return (
    <DesktopWindow title='Calculator' initialX={160} initialY={80} onClose={onClose}>
      <div className='flex flex-col w-[260px] p-[15px] gap-[10px]'>
        <p className='h-[45px] text-right text-3xl leading-[45px] overflow-hidden'>{display}</p>
        <div className='grid grid-cols-4 gap-[8px]'>
          <CalcButton label='C' onClick={clear} />
          <CalcButton label='±' onClick={() => setDisplay(format(-parseFloat(display)))} />
          <CalcButton label='%' onClick={() => setDisplay(format(parseFloat(display) / 100))} />
          <CalcButton label='÷' onClick={() => applyOperator('÷')} />
          <CalcButton label='7' onClick={() => inputDigit('7')} />
          <CalcButton label='8' onClick={() => inputDigit('8')} />
          <CalcButton label='9' onClick={() => inputDigit('9')} />
          <CalcButton label='×' onClick={() => applyOperator('×')} />
          <CalcButton label='4' onClick={() => inputDigit('4')} />
          <CalcButton label='5' onClick={() => inputDigit('5')} />
          <CalcButton label='6' onClick={() => inputDigit('6')} />
          <CalcButton label='-' onClick={() => applyOperator('-')} />
          <CalcButton label='1' onClick={() => inputDigit('1')} />
          <CalcButton label='2' onClick={() => inputDigit('2')} />
          <CalcButton label='3' onClick={() => inputDigit('3')} />
          <CalcButton label='+' onClick={() => applyOperator('+')} />
          <CalcButton label='0' wide onClick={() => inputDigit('0')} />
          <CalcButton label='.' onClick={inputDot} />
          <CalcButton label='=' onClick={equals} />
        </div>
      </div>
    </DesktopWindow>
  );
}

export default Calculator;
