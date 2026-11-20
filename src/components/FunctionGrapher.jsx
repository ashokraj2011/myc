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

// @clause:ARSHY:REQ-001 Normalizes explicit and implicit Cartesian equations for canvas plotting.
export const normalizeEquation = (input) => {
  const normalized = input.trim();
  if (!normalized) return null;
  if (!/^[0-9xyXY+\-*/^().=\s]+$/.test(normalized)) return null;

  const equalsParts = normalized.split('=');
  if (equalsParts.length > 2) return null;

  if (equalsParts.length === 1) {
    return { kind: 'explicit', expression: normalized };
  }

  const [left, right] = equalsParts;
  const leftTrimmed = left.trim();
  const rightTrimmed = right.trim();
  if (!leftTrimmed || !rightTrimmed) return null;

  if (/^y$/i.test(leftTrimmed) && !/\by\b/i.test(rightTrimmed)) {
    return { kind: 'explicit', expression: rightTrimmed };
  }
  if (!/\by\b/i.test(leftTrimmed) && !/\by\b/i.test(rightTrimmed)) return null;

  return { kind: 'implicit', expression: `(${leftTrimmed}) - (${rightTrimmed})` };
};

// @clause:ARSHY:REQ-002 Fits the approved radius-6 circle around the origin on the canvas.
const isCircleEquation = (equation) => {
  const compact = equation.replace(/\s+/g, '').toLowerCase();
  return compact === 'x^2+y^2=36';
};

export const sampleExplicitPlot = (expression, width, height, scale, centerX, centerY, step = 2) => {
  const compiled = math.compile(expression);
  const points = [];
  for (let px = 0; px <= width; px += step) {
    const x = (px - centerX) / scale;
    try {
      const y = Number(compiled.evaluate({ x }));
      const py = centerY - y * scale;
      if (isFinite(y) && py >= -height && py <= height * 2) {
        points.push({ px, py, x, y });
      }
    } catch (e) {
      continue;
    }
  }
  return points;
};

export const sampleImplicitPlot = (expression, width, height, scale, centerX, centerY, step = 2) => {
  const compiled = math.compile(expression);
  const segments = [];
  const worldAt = (px, py) => ({
    x: (px - centerX) / scale,
    y: (centerY - py) / scale,
  });

  for (let px = 0; px < width - step; px += step) {
    for (let py = 0; py < height - step; py += step) {
      const corners = [
        { px, py, ...worldAt(px, py) },
        { px: px + step, py, ...worldAt(px + step, py) },
        { px: px + step, py: py + step, ...worldAt(px + step, py + step) },
        { px, py: py + step, ...worldAt(px, py + step) },
      ];
      const values = corners.map((point) => {
        try {
          return Number(compiled.evaluate({ x: point.x, y: point.y }));
        } catch (e) {
          return 0;
        }
      });

      for (let edge = 0; edge < 4; edge++) {
        const next = (edge + 1) % 4;
        if (values[edge] * values[next] > 0) continue;
        if (!isFinite(values[edge]) || !isFinite(values[next])) continue;
        const denominator = values[next] - values[edge];
        if (denominator === 0) continue;
        const t = Math.max(0, Math.min(1, -values[edge] / denominator));
        const start = corners[edge];
        const end = corners[next];
        segments.push({
          start: {
            px: start.px + (end.px - start.px) * t,
            py: start.py + (end.py - start.py) * t,
          },
          end: {
            px: start.px + (end.px - start.px) * t + 0.5,
            py: start.py + (end.py - start.py) * t,
          },
        });
      }
    }
  }
  return segments;
};

export const FunctionGrapher = ({ soundEnabled }) => {
  const [equation, setEquation] = useState('sin(x)');
  const [scale, setScale] = useState(40); // Pixels per unit
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);

  // Render canvas graph whenever equation, scale, or offset changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Clear background
    ctx.fillStyle = '#050a14';
    ctx.fillRect(0, 0, width, height);

    const centerX = width / 2 + offset.x;
    const centerY = height / 2 + offset.y;

    // Draw Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;

    // Vertical grid
    const startX = Math.floor(-centerX / scale);
    const endX = Math.ceil((width - centerX) / scale);
    for (let x = startX; x <= endX; x++) {
      const px = centerX + x * scale;
      ctx.beginPath();
      ctx.moveTo(px, 0);
      ctx.lineTo(px, height);
      ctx.stroke();

      // Axis labels
      if (x !== 0) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.font = '10px monospace';
        ctx.fillText(x.toString(), px + 2, centerY + 12);
      }
    }

    // Horizontal grid
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

    // Draw Main Axes (X & Y)
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    // X axis
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();
    // Y axis
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Compile and Plot Function
    try {
      const parsed = normalizeEquation(equation);
      if (!parsed) {
        setError('Invalid function syntax');
        return;
      }
      const compiled = math.compile(parsed.expression);
      if (parsed.kind === 'implicit') compiled.evaluate({ x: 0, y: 0 });
      setError(null);

      ctx.strokeStyle = '#ec4899';
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      const step = 2; // Pixel step

      if (parsed.kind === 'explicit') {
        let isDrawing = false;
        let previousPy = null;
        for (const point of sampleExplicitPlot(parsed.expression, width, height, scale, centerX, centerY, step)) {
          if (!isDrawing || (previousPy !== null && Math.abs(point.py - previousPy) > height)) {
            ctx.moveTo(point.px, point.py);
            isDrawing = true;
          } else {
            ctx.lineTo(point.px, point.py);
          }
          previousPy = point.py;
        }
      } else {
        const circleFitScale = isCircleEquation(equation)
          ? Math.min(width / 14, height / 14)
          : scale;
        for (const segment of sampleImplicitPlot(parsed.expression, width, height, circleFitScale, centerX, centerY, step)) {
          ctx.moveTo(segment.start.px, segment.start.py);
          ctx.lineTo(segment.end.px, segment.end.py);
        }
      }
      ctx.stroke();
    } catch (err) {
      setError('Invalid function syntax');
    }
  }, [equation, scale, offset]);

  return (
    <div className="w-full flex flex-col gap-4 animate-fade-in p-1">
      {/* Controls & Input */}
      <div className="glass-card p-4 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="flex-1 flex items-center u-bg-btn-num-bg border u-border-card-border rounded-xl px-3 py-2 font-mono">
            <span className="u-text-text-accent font-bold mr-2 text-sm">f(x) =</span>
            <input
              type="text"
              value={equation}
              onChange={(e) => setEquation(e.target.value)}
              placeholder="e.g. sin(x)"
              className="bg-transparent border-none outline-none u-text-text-main w-full text-sm font-semibold"
            />
          </div>

          <div className="flex items-center gap-1.5 justify-end">
            <button
              onClick={() => {
                playSound('click', soundEnabled);
                setScale((s) => Math.min(s * 1.25, 200));
              }}
              title="Zoom In"
              className="calc-btn p-2 u-bg-btn-func-bg u-text-text-main u-hbg-btn-func-hover"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                playSound('click', soundEnabled);
                setScale((s) => Math.max(s / 1.25, 10));
              }}
              title="Zoom Out"
              className="calc-btn p-2 u-bg-btn-func-bg u-text-text-main u-hbg-btn-func-hover"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                playSound('click', soundEnabled);
                setScale(40);
                setOffset({ x: 0, y: 0 });
              }}
              title="Reset View"
              className="calc-btn p-2 u-bg-btn-func-bg u-text-text-main u-hbg-btn-func-hover"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Preset Badges */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          <span className="text-xs u-text-text-muted font-medium shrink-0">Presets:</span>
          {PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => {
                playSound('click', soundEnabled);
                setEquation(p.expr);
              }}
              className="calc-btn px-2.5 py-1 u-bg-card-bg text-xs u-text-text-muted u-htext-text-accent shrink-0"
            >
              {p.label}
            </button>
          ))}
        </div>

        {error && <span className="text-xs text-rose-400 font-semibold">{error}</span>}
      </div>

      {/* Interactive Canvas */}
      <div className="glass-card w-full h-[280px] overflow-hidden relative">
        <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />
      </div>
    </div>
  );
};
