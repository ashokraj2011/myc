import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Display } from './components/Display';
import { StandardKeypad } from './components/StandardKeypad';
import { ScientificKeypad } from './components/ScientificKeypad';
import { UnitConverter } from './components/UnitConverter';
import { FinancialCalculator } from './components/FinancialCalculator';
import { FunctionGrapher } from './components/FunctionGrapher';
import { HistoryDrawer } from './components/HistoryDrawer';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';
import { evaluateExpression } from './utils/evaluator';
import { playSound } from './utils/audio';

/** Render the calculator modes and coordinate their shared calculation state. */
export default function App() {
  const [activeMode, setActiveMode] = useState('standard');
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');
  const [lastEvaluated, setLastEvaluated] = useState(false);
  const [angleUnit, setAngleUnit] = useState('DEG');
  const [memoryValue, setMemoryValue] = useState(0);

  // Customization & UI state
  const [theme, setTheme] = useState(() => localStorage.getItem('apex_theme') || 'classic');
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('apex_sound');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('apex_history')) || [];
    } catch (e) {
      return [];
    }
  });

  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  // Sync theme to document body data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('apex_theme', theme);
  }, [theme]);

  // Sync sound settings
  useEffect(() => {
    localStorage.setItem('apex_sound', JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  // Sync history to localStorage
  useEffect(() => {
    localStorage.setItem('apex_history', JSON.stringify(history));
  }, [history]);

  // Handlers for digit, operator, clear, backspace, equals
  const handleDigit = useCallback(
    (digit) => {
      if (lastEvaluated) {
        setExpression(digit);
        setResult(digit);
        setLastEvaluated(false);
      } else {
        const nextExpr = expression === '0' ? digit : expression + digit;
        setExpression(nextExpr);
      }
    },
    [expression, lastEvaluated]
  );

  const handleOperator = useCallback(
    (op) => {
      setLastEvaluated(false);
      if (!expression && result && result !== '0' && result !== 'Error') {
        setExpression(result + ' ' + op + ' ');
      } else {
        setExpression((prev) => prev + ' ' + op + ' ');
      }
    },
    [expression, result]
  );

  const handleClear = useCallback(() => {
    setExpression('');
    setResult('0');
    setLastEvaluated(false);
  }, []);

  const handleBackspace = useCallback(() => {
    if (lastEvaluated) {
      handleClear();
      return;
    }
    setExpression((prev) => {
      if (prev.endsWith(' ')) {
        return prev.slice(0, -3); // Remove operator with spaces
      }
      return prev.slice(0, -1);
    });
  }, [lastEvaluated, handleClear]);

  const handleNegate = useCallback(() => {
    if (!expression) return;
    if (expression.startsWith('-(') && expression.endsWith(')')) {
      setExpression(expression.slice(2, -1));
    } else {
      setExpression(`-(${expression})`);
    }
  }, [expression]);

  const handlePercent = useCallback(() => {
    if (!expression) return;
    setExpression((prev) => prev + '%');
  }, [expression]);

  const handleEquals = useCallback(() => {
    if (!expression || expression.trim() === '') return;

    const evalRes = evaluateExpression(expression, angleUnit);
    setResult(evalRes.result);
    setLastEvaluated(true);

    if (!evalRes.error && evalRes.result !== 'Error') {
      const newEntry = {
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        expression: expression,
        result: evalRes.result,
      };
      setHistory((prev) => [newEntry, ...prev.slice(0, 49)]); // Keep last 50 items
    }
  }, [expression, angleUnit]);

  // @clause:BIN-ASHOK:REQ-001 Convert the displayed whole number to base 2.
  // @clause:BIN-ASHOK:REQ-002 Reject values outside the positive whole-number domain.
  const handleConvertToBinary = useCallback(() => {
    // While a number is being entered the active expression is the displayed value.
    const activeValue = !lastEvaluated && expression.trim() ? expression : result;
    const displayedValue = activeValue.trim().replaceAll(',', '');
    const match = displayedValue.match(/^(\d+)(?:\.(\d+))?(?:e([+-]?\d+))?$/i);

    if (!match) {
      setResult('not supported');
      setLastEvaluated(true);
      return;
    }

    const fraction = match[2] || '';
    const exponent = Number(match[3] || 0);
    const digits = `${match[1]}${fraction}`.replace(/^0+/, '');
    const scale = exponent - fraction.length;

    if (!digits) {
      setResult('not supported');
      setLastEvaluated(true);
      return;
    }

    let integerDigits = digits;

    if (scale < 0) {
      const decimalPlaces = -scale;
      if (decimalPlaces >= digits.length) {
        setResult('not supported');
        setLastEvaluated(true);
        return;
      }
      if (decimalPlaces < digits.length && /[1-9]/.test(digits.slice(-decimalPlaces))) {
        setResult('not supported');
        setLastEvaluated(true);
        return;
      }
      integerDigits = digits.slice(0, digits.length - decimalPlaces);
    } else {
      integerDigits += '0'.repeat(scale);
    }

    setResult(BigInt(integerDigits).toString(2));
    setLastEvaluated(true);
  }, [expression, lastEvaluated, result]);

  const handleMemory = useCallback(
    (type) => {
      const currentNum = parseFloat(result) || 0;
      switch (type) {
        case 'MC':
          setMemoryValue(0);
          break;
        case 'MR':
          setExpression((prev) => prev + memoryValue.toString());
          break;
        case 'M+':
          setMemoryValue((prev) => prev + currentNum);
          break;
        case 'M-':
          setMemoryValue((prev) => prev - currentNum);
          break;
        default:
          break;
      }
    },
    [result, memoryValue]
  );

  // Global Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

      const key = e.key;

      if (key >= '0' && key <= '9') {
        playSound('digit', soundEnabled);
        handleDigit(key);
      } else if (key === '.') {
        playSound('digit', soundEnabled);
        handleDigit('.');
      } else if (key === '+') {
        playSound('operator', soundEnabled);
        handleOperator('+');
      } else if (key === '-') {
        playSound('operator', soundEnabled);
        handleOperator('-');
      } else if (key === '*') {
        playSound('operator', soundEnabled);
        handleOperator('×');
      } else if (key === '/') {
        e.preventDefault();
        playSound('operator', soundEnabled);
        handleOperator('÷');
      } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        playSound('equals', soundEnabled);
        handleEquals();
      } else if (key === 'Backspace') {
        playSound('digit', soundEnabled);
        handleBackspace();
      } else if (key === 'Escape') {
        playSound('clear', soundEnabled);
        handleClear();
      } else if (key === '%') {
        playSound('operator', soundEnabled);
        handlePercent();
      } else if (key === '^') {
        playSound('operator', soundEnabled);
        handleDigit('^');
      } else if (key.toLowerCase() === 's') {
        playSound('operator', soundEnabled);
        handleDigit('sin(');
      } else if (key.toLowerCase() === 'c') {
        playSound('operator', soundEnabled);
        handleDigit('cos(');
      } else if (key.toLowerCase() === 't') {
        playSound('operator', soundEnabled);
        handleDigit('tan(');
      } else if (key.toLowerCase() === 'p') {
        playSound('digit', soundEnabled);
        handleDigit('π');
      } else if (key.toLowerCase() === 'e') {
        playSound('digit', soundEnabled);
        handleDigit('e');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    soundEnabled,
    handleDigit,
    handleOperator,
    handleEquals,
    handleBackspace,
    handleClear,
    handlePercent,
  ]);

  return (
    <div className="w-full max-w-xl mx-auto p-4 sm:p-6 min-h-screen flex items-center justify-center">
      <main className="glass-card w-full p-5 sm:p-7 flex flex-col items-center">
        {/* Top Header */}
        <Header
          activeMode={activeMode}
          setActiveMode={setActiveMode}
          currentTheme={theme}
          setTheme={setTheme}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          toggleHistory={() => setIsHistoryOpen(true)}
          toggleKeyboardModal={() => setIsKeyboardOpen(true)}
        />

        {/* Dynamic Content based on Active Mode */}
        {activeMode === 'standard' && (
          <div className="w-full flex flex-col items-center animate-fade-in">
            <Display
              expression={expression}
              result={result}
              angleUnit={angleUnit}
              setAngleUnit={setAngleUnit}
              memoryValue={memoryValue}
              soundEnabled={soundEnabled}
              onBackspace={handleBackspace}
              onClear={handleClear}
              onConvertToBinary={handleConvertToBinary}
            />
            <StandardKeypad
              onDigit={handleDigit}
              onOperator={handleOperator}
              onEquals={handleEquals}
              onClear={handleClear}
              onBackspace={handleBackspace}
              onNegate={handleNegate}
              onPercent={handlePercent}
              onMemory={handleMemory}
              soundEnabled={soundEnabled}
            />
          </div>
        )}

        {activeMode === 'scientific' && (
          <div className="w-full flex flex-col items-center animate-fade-in">
            <Display
              expression={expression}
              result={result}
              angleUnit={angleUnit}
              setAngleUnit={setAngleUnit}
              memoryValue={memoryValue}
              soundEnabled={soundEnabled}
              onBackspace={handleBackspace}
              onClear={handleClear}
              onConvertToBinary={handleConvertToBinary}
            />
            <ScientificKeypad
              onDigit={handleDigit}
              onOperator={handleOperator}
              onEquals={handleEquals}
              onClear={handleClear}
              onBackspace={handleBackspace}
              onNegate={handleNegate}
              onPercent={handlePercent}
              onMemory={handleMemory}
              soundEnabled={soundEnabled}
            />
          </div>
        )}

        {activeMode === 'converter' && <UnitConverter soundEnabled={soundEnabled} />}

        {activeMode === 'financial' && <FinancialCalculator soundEnabled={soundEnabled} />}

        {activeMode === 'grapher' && <FunctionGrapher soundEnabled={soundEnabled} />}
      </main>

      {/* History Side Drawer */}
      <HistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onSelectHistory={(item) => {
          setExpression(item.expression);
          setResult(item.result);
          setIsHistoryOpen(false);
        }}
        onClearHistory={() => setHistory([])}
        soundEnabled={soundEnabled}
      />

      {/* Keyboard Shortcuts Modal */}
      <KeyboardShortcutsModal
        isOpen={isKeyboardOpen}
        onClose={() => setIsKeyboardOpen(false)}
        soundEnabled={soundEnabled}
      />
    </div>
  );
}
