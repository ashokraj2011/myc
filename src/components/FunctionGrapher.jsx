import React, { useState, useEffect, useRef } from 'react';
import * as math from 'mathjs';
import { ZoomIn, ZoomOut, RotateCcw, Play } from 'lucide-react';
import { playSound } from '../utils/audio';

const PRESETS = [
  { label: 'sin(x)', expr: 'sin(x)' },
  { label: 'x²', expr: 'x^2 - 4' },
  { label: 'cos(x) * x', expr: 'cos(x) * x' },
  { label: 'tan(x)', expr: 'tan(x)' },
  { label: 'Damped Sine', expr: 'exp(-0.2*x) * sin(3*x)' },
];

const KEYPAD_KEYS = [
  { label: 'sin', token: 'sin(' },
  { label: 'cos', token: 'cos(' },
  { label: 'tan', token: 'tan(' },
  { label: 'sqrt', token: 'sqrt(' },
  { label: 'x', token: 'x' },
  { label: 'y', token: 'y' },
  { label: 'π', token: 'pi' },
  { label: '^', token: '^' },
  { label: '(', token: '(' },
  { label: ')', token: ')' },
  { label: '+', token: '+' },
  { label: '−', token: '-' },
  { label: '×', token: '*' },
  { label: '÷', token: '/' },
  { label: '=', token: ' = ' },
  { label: ',', token: ', ' },
];

const initialScale = () => {
  if (typeof window === 'undefined') return 40;
  return Math.min(40, Math.max(12, (window.innerWidth / 2 - 64) / 6));
};

const evaluate = (compiled, scope) => {
  try {
    const value = compiled.evaluate(scope);
    return typeof value === 'number' && Number.isFinite(value) ? value : null;
  } catch {
    return null;
  }
};

const drawGrid = (ctx, width, height, centerX, centerY, scale) => {
  ctx.fillStyle = '#050a14';
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;

  const startX = Math.floor(-centerX / scale);
  const endX = Math.ceil((width - centerX) / scale);
  for (let x = startX; x <= endX; x++) {
    const px = centerX + x * scale;
    ctx.beginPath();
    ctx.moveTo(px, 0);
    ctx.lineTo(px, height);
    ctx.stroke();
    if (x !== 0) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.font = '10px monospace';
      ctx.fillText(x.toString(), px + 2, centerY + 12);
    }
  }

  const startY = Math.floor(-centerY / scale);
  const endY = Math.ceil((height - centerY) / scale);
  for (let y = startY; y <= endY; y++) {
    const py = centerY + y * scale;
    ctx.beginPath();
    ctx.moveTo(0, py);
    ctx.lineTo(width, py);
    ctx.stroke();
    if (y !== 0) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.font = '10px monospace';
      ctx.fillText((-y).toString(), centerX + 4, py - 2);
    }
  }

  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, height);
  ctx.stroke();
};

const drawFunction = (ctx, compiled, width, height, centerX, centerY, scale) => {
  ctx.strokeStyle = '#ec4899';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  let isDrawing = false;

  for (let px = 0; px <= width; px += 2) {
    const yValue = evaluate(compiled, { x: (px - centerX) / scale });
    if (yValue !== null) {
      const py = centerY - yValue * scale;
      if (py >= -height && py <= height * 2) {
        if (!isDrawing) {
          ctx.moveTo(px, py);
          isDrawing = true;
        } else {
          ctx.lineTo(px, py);
        }
        continue;
      }
    }
    isDrawing = false;
  }
  ctx.stroke();
};

// @clause:NEW-ASH-GRAPH:REQ-002 Render equality expressions as implicit zero contours.
const drawRelation = (ctx, left, right, width, height, centerX, centerY, scale) => {
  const sample = (px, py) => {
    const x = (px - centerX) / scale;
    const y = (centerY - py) / scale;
    const leftValue = evaluate(left, { x, y });
    const rightValue = evaluate(right, { x, y });
    return {
      x: px,
      y: py,
      value: leftValue === null || rightValue === null ? null : leftValue - rightValue,
    };
  };
  const crossesZero = (a, b) =>
    a.value !== null &&
    b.value !== null &&
    (a.value === 0 || b.value === 0 || (a.value < 0) !== (b.value < 0));
  const intersection = (a, b) => {
    const denominator = a.value - b.value;
    if (denominator === 0) return null;
    const ratio = a.value / denominator;
    return {
      x: a.x + (b.x - a.x) * ratio,
      y: a.y + (b.y - a.y) * ratio,
    };
  };

  ctx.strokeStyle = '#ec4899';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  const cellSize = 4;
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ];

  for (let py = 0; py < height; py += cellSize) {
    for (let px = 0; px < width; px += cellSize) {
      const points = [
        sample(px, py),
        sample(Math.min(px + cellSize, width), py),
        sample(Math.min(px + cellSize, width), Math.min(py + cellSize, height)),
        sample(px, Math.min(py + cellSize, height)),
      ];
      const intersections = [];
      for (const [start, end] of edges) {
        const first = points[start];
        const second = points[end];
        if (!crossesZero(first, second)) continue;
        const point = intersection(first, second);
        if (point && !intersections.some((other) => Math.hypot(other.x - point.x, other.y - point.y) < 0.1)) {
          intersections.push(point);
        }
      }
      for (let index = 0; index + 1 < intersections.length; index += 2) {
        ctx.moveTo(intersections[index].x, intersections[index].y);
        ctx.lineTo(intersections[index + 1].x, intersections[index + 1].y);
      }
    }
  }
  ctx.stroke();
};

// @clause:NEW-ASH-GRAPH:REQ-001 Arrange the expression panel, graph canvas, and keypad in graph mode.
// @clause:NEW-ASH-GRAPH:AC-002 Keep those graph controls responsive within the graph workspace.
export const FunctionGrapher = ({ soundEnabled }) => {
  const [equation, setEquation] = useState('sin(x)');
  const [scale, setScale] = useState(initialScale);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);

    const centerX = width / 2 + offset.x;
    const centerY = height / 2 + offset.y;
    canvas.dataset.graphScale = String(scale);
    canvas.dataset.graphCenterX = String(centerX);
    canvas.dataset.graphCenterY = String(centerY);
    drawGrid(ctx, width, height, centerX, centerY, scale);

    const source = equation.trim();
    if (!source) {
      setError(null);
      return;
    }
    try {
      const sides = source.split('=');
      if (sides.length > 2 || sides.some((side) => !side.trim())) {
        throw new Error('Invalid relation');
      }
      if (sides.length === 2) {
        drawRelation(ctx, math.compile(sides[0]), math.compile(sides[1]), width, height, centerX, centerY, scale);
      } else {
        drawFunction(ctx, math.compile(source), width, height, centerX, centerY, scale);
      }
      setError(null);
    } catch {
      setError('Invalid function or relation syntax');
    }
  }, [equation, scale, offset]);

  const insertToken = (token) => {
    const input = inputRef.current;
    const start = input?.selectionStart ?? equation.length;
    const end = input?.selectionEnd ?? equation.length;
    const next = `${equation.slice(0, start)}${token}${equation.slice(end)}`;
    setEquation(next);
    requestAnimationFrame(() => {
      input?.focus();
      input?.setSelectionRange(start + token.length, start + token.length);
    });
  };

  const resetView = () => {
    setScale(initialScale());
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div className="graph-workspace animate-fade-in">
      <aside className="glass-card graph-expression-panel">
        <div className="graph-panel-heading">
          <div>
            <p className="graph-panel-eyebrow">GRAPHING CALCULATOR</p>
            <h2>Expressions</h2>
          </div>
          <span className="graph-expression-indicator" aria-hidden="true" />
        </div>

        <label className="graph-field-label" htmlFor="graph-expression">
          {equation.includes('=') ? 'Relation' : 'Function'}
        </label>
        <div className="graph-expression-field">
          <span aria-hidden="true">{equation.includes('=') ? 'Relation:' : 'y ='}</span>
          <input
            ref={inputRef}
            id="graph-expression"
            aria-label="Graph expression"
            type="text"
            value={equation}
            onChange={(event) => setEquation(event.target.value)}
            placeholder="e.g. sin(x) or x^2 + y^2 = 36"
            spellCheck="false"
          />
        </div>
        <p className="graph-field-hint">Use x for a function, or enter an equality to graph a relation.</p>

        <div className="graph-presets">
          <h3>Examples</h3>
          {PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              className="calc-btn"
              onClick={() => {
                playSound('click', soundEnabled);
                setEquation(preset.expr);
              }}
            >
              <span className="graph-preset-dot" aria-hidden="true" />
              <span>{preset.label}</span>
            </button>
          ))}
        </div>
      </aside>

      <section className="graph-plot-panel" aria-label="Cartesian graph">
        <div className="glass-card graph-canvas-frame">
          <canvas
            ref={canvasRef}
            aria-label="Cartesian graph canvas"
            data-testid="graph-canvas"
            className="graph-canvas"
          />
          {error && <div className="graph-error" role="alert">{error}</div>}
        </div>
        <div className="graph-view-controls" aria-label="Graph view controls">
          <button
            type="button"
            className="calc-btn"
            onClick={() => {
              playSound('click', soundEnabled);
              setScale((value) => Math.min(value * 1.25, 200));
            }}
            aria-label="Zoom in"
            title="Zoom In"
          >
            <ZoomIn aria-hidden="true" />
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={() => {
              playSound('click', soundEnabled);
              setScale((value) => Math.max(value / 1.25, 10));
            }}
            aria-label="Zoom out"
            title="Zoom Out"
          >
            <ZoomOut aria-hidden="true" />
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={() => {
              playSound('click', soundEnabled);
              resetView();
            }}
            aria-label="Reset view"
            title="Reset View"
          >
            <RotateCcw aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="glass-card graph-keypad" aria-label="Math keypad">
        <div className="graph-keypad-heading">
          <div>
            <h2>Math keypad</h2>
            <p>Tap a key to insert it into the expression.</p>
          </div>
          <div className="graph-keypad-actions">
            <button
              type="button"
              className="calc-btn"
              onClick={() => setEquation('')}
              aria-label="Clear expression"
            >
              Clear
            </button>
            <button
              type="button"
              className="calc-btn"
              onClick={() => setEquation((value) => value.slice(0, -1))}
              aria-label="Delete previous character"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="graph-key-grid">
          {KEYPAD_KEYS.map(({ label, token }) => (
            <button
              key={`${label}-${token}`}
              type="button"
              className="calc-btn"
              onClick={() => insertToken(token)}
              aria-label={`Insert ${label}`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
