import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
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

const HEX_NOT_SUPPORTED = 'Not Supported';

// @clause:c-hex:REQ-002 Convert every supported positive base-10 whole number.
// @clause:c-hex:REQ-003 Format supported results as uppercase hexadecimal without a prefix.
// @clause:c-hex:REQ-004 Return the exact unsupported-domain message for every invalid input.
// @clause:C-HEX:AC-001 Converting decimal 255 produces exactly FF.
// @clause:C-HEX:AC-002 Converting the lowest supported input 1 produces exactly 1.
// @clause:C-HEX:AC-003 Uppercase formatting omits the hexadecimal prefix.
// @clause:C-HEX:AC-004 Validation maps every unsupported input class to the required message.
const convertToHex = (value) => {
  if (value === '' || value === null || value === undefined) {
    return HEX_NOT_SUPPORTED;
  }

  const trimmed = String(value).trim();
  if (trimmed === '' || !/^\d+$/.test(trimmed)) {
    return HEX_NOT_SUPPORTED;
  }

  const normalized = trimmed.replace(/^0+/, '') || '0';
  if (normalized === '0') {
    return HEX_NOT_SUPPORTED;
  }

  try {
    return BigInt(normalized).toString(16).toUpperCase();
  } catch {
    return HEX_NOT_SUPPORTED;
  }
};

export default function App() {
  const [activeMode, setActiveMode] = useState('standard');
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');
  const [lastEvaluated, setLastEvaluated] = useState(false);
  const [angleUnit, setAngleUnit] = useState('DEG');
  const [memoryValue, setMemoryValue] = useState(0);
  const [hexInput, setHexInput] = useState('');
  const [hexResult, setHexResult] = useState(HEX_NOT_SUPPORTED);

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

  const handleHexConvert = useCallback(() => {
    setHexResult(convertToHex(hexInput));
  }, [hexInput]);

  const handleHexInputKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleHexConvert();
    }
  }, [handleHexConvert]);

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

        {/* @clause:c-hex:REQ-001 Expose conversion input and submission in the browser application. */}
        {activeMode === 'hex' && (
          <div className="w-full flex flex-col items-center animate-fade-in gap-5">
            <div className="hex-converter-panel glass-card w-full max-w-md p-5 sm:p-6">
              <label className="block text-sm font-medium u-text-text-muted mb-2">Decimal value</label>
              <input
                type="text"
                value={hexInput}
                onChange={(event) => setHexInput(event.target.value)}
                onKeyDown={handleHexInputKeyDown}
                placeholder="Enter a positive whole number"
                className="hex-converter-input w-full rounded-xl border u-border-card-border u-bg-btn-num-bg p-3 text-lg font-mono u-text-text-main outline-none u-fborder-text-accent"
              />
              <button
                type="button"
                onClick={handleHexConvert}
                className="calc-btn mt-4 w-full p-3 text-base font-semibold"
              >
                Convert to Hex
              </button>
              <div className="hex-converter-result mt-4 rounded-xl border u-border-card-border u-bg-display-bg p-3 text-center">
                <div className="text-xs uppercase tracking-[0.2em] u-text-text-muted">Result</div>
                <div className="mt-2 text-3xl font-bold font-mono u-text-text-accent">{hexResult}</div>
              </div>
            </div>
          </div>
        )}

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
