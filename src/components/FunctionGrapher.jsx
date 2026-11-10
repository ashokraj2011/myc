import { useState, useEffect, useRef } from 'react';
import * as math from 'mathjs';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { playSound } from '../utils/audio';

const PRESETS = [
  { label: 'sin(x)', expr: 'sin(x)' },
  { label: 'x²', expr: 'x^2 - 4' },
  { label: 'cos(x) * x', expr: 'cos(x) * x' },
  { label: 'tan(x)', expr: 'tan(x)' },
  { label: 'Damped Sine', expr: 'exp(-0.2*x) * sin(3*x)' },
];

/**
 * Renders calculator function and circle plots on a responsive canvas.
 * @param {{ soundEnabled: boolean }} props Whether calculator sounds are enabled.
 * @returns {import('react').ReactElement} The grapher controls and canvas.
 */
export const FunctionGrapher = ({ soundEnabled }) => {
  const [equation, setEquation] = useState('sin(x)');
  const [plotType, setPlotType] = useState('function');
  const [circle, setCircle] = useState({ x: '0', y: '0', radius: '6' });
  const [scale, setScale] = useState(40); // Pixels per unit
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [functionError, setFunctionError] = useState(null);
  const radius = Number(circle.radius);
  const circleValid =
    Number.isFinite(Number(circle.x)) &&
    Number.isFinite(Number(circle.y)) &&
    Number.isFinite(radius) &&
    radius > 0;
  const error =
    plotType === 'circle'
      ? circleValid
        ? null
        : 'Enter numeric center coordinates and a positive radius'
      : functionError;
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

    const circleScale =
      plotType === 'circle' && Number.isFinite(radius) && radius > 0
        ? Math.min(width, height) / (2 * (radius + 1))
        : scale;
    const graphScale = plotType === 'circle' ? circleScale : scale;
    const circleX = Number.isFinite(Number(circle.x)) ? Number(circle.x) : 0;
    const circleY = Number.isFinite(Number(circle.y)) ? Number(circle.y) : 0;
    const centerX =
      width / 2 + offset.x - (plotType === 'circle' ? circleX * graphScale : 0);
    const centerY =
      height / 2 + offset.y + (plotType === 'circle' ? circleY * graphScale : 0);

    // Draw Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;

    // Vertical grid
    const startX = Math.floor(-centerX / graphScale);
    const endX = Math.ceil((width - centerX) / graphScale);
    for (let x = startX; x <= endX; x++) {
      const px = centerX + x * graphScale;
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
    const startY = Math.floor(-centerY / graphScale);
    const endY = Math.ceil((height - centerY) / graphScale);
    for (let y = startY; y <= endY; y++) {
      const py = centerY + y * graphScale;
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

    if (plotType === 'circle') {
      if (circleValid) {
        // @clause:NEW-GRAPH-PLOT:AC-002 @clause:NEW-GRAPH-PLOT:REQ-002 Circle rendering uses equal pixel scales and fits the requested radius inside the canvas.
        ctx.strokeStyle = '#ec4899';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * graphScale, 0, Math.PI * 2);
        ctx.stroke();
      }
    } else {
      // @clause:NEW-GRAPH-PLOT:REQ-001 Existing function plots remain available.
      // Compile and Plot Function
      try {
        const compiled = math.compile(equation);
        ctx.strokeStyle = '#ec4899';
        ctx.lineWidth = 2.5;
        ctx.beginPath();

        let isDrawing = false;
        const step = 2; // Pixel step

        for (let px = 0; px <= width; px += step) {
          const xVal = (px - centerX) / graphScale;
          try {
            const yVal = compiled.evaluate({ x: xVal });
            if (typeof yVal === 'number' && !isNaN(yVal) && isFinite(yVal)) {
              const py = centerY - yVal * graphScale;
              // Prevent crazy asymptote jumps e.g. tan(x)
              if (py >= -height && py <= height * 2) {
                if (!isDrawing) {
                  ctx.moveTo(px, py);
                  isDrawing = true;
                } else {
                  ctx.lineTo(px, py);
                }
              } else {
                isDrawing = false;
              }
            } else {
              isDrawing = false;
            }
          } catch {
            isDrawing = false;
          }
        }
        ctx.stroke();
      } catch {
        // The input handler surfaces invalid syntax.
      }
    }
  }, [equation, plotType, circle, circleValid, radius, scale, offset]);

  return (
    <div className="w-full flex flex-col gap-4 animate-fade-in p-1">
      {/* Controls & Input */}
      <div className="glass-card p-4 flex flex-col gap-3">
        <label className="flex items-center gap-2 text-sm u-text-text-main">
          Plot type
          <select
            aria-label="Plot type"
            value={plotType}
            onChange={(event) => setPlotType(event.target.value)}
            className="u-bg-btn-num-bg border u-border-card-border rounded-lg px-2 py-1"
          >
            <option value="function">Function</option>
            <option value="circle">Circle</option>
          </select>
        </label>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {plotType === 'function' ? (
            <div className="flex-1 flex items-center u-bg-btn-num-bg border u-border-card-border rounded-xl px-3 py-2 font-mono">
              <span className="u-text-text-accent font-bold mr-2 text-sm">f(x) =</span>
              <input
                type="text"
                aria-label="Function"
                value={equation}
                onChange={(event) => {
                  const value = event.target.value;
                  setEquation(value);
                  try {
                    math.compile(value);
                    setFunctionError(null);
                  } catch {
                    setFunctionError('Invalid function syntax');
                  }
                }}
                placeholder="e.g. sin(x)"
                className="bg-transparent border-none outline-none u-text-text-main w-full text-sm font-semibold"
              />
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              {[
                ['Center x', 'x'],
                ['Center y', 'y'],
                ['Radius', 'radius'],
              ].map(([label, key]) => (
                <label key={key} className="flex items-center gap-1 text-xs u-text-text-main">
                  {label}
                  <input
                    aria-label={label}
                    type="number"
                    value={circle[key]}
                    min={key === 'radius' ? '0' : undefined}
                    step="any"
                    onChange={(event) =>
                      setCircle((current) => ({ ...current, [key]: event.target.value }))
                    }
                    className="w-16 u-bg-btn-num-bg border u-border-card-border rounded-lg px-2 py-1"
                  />
                </label>
              ))}
            </div>
          )}

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
          {plotType === 'function' && PRESETS.map((p) => (
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
