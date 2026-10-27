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

const isValidEquation = (equation) => {
  try {
    const equality = equation.split('=');
    if (equality.length === 2) {
      math.compile(equality[0].trim());
      math.compile(equality[1].trim());
    } else {
      math.compile(equation);
    }
    return true;
  } catch {
    return false;
  }
};

// @clause:WS-GRAPH:REQ-001 The view pairs its editable equation with a labeled coordinate grid.
// @clause:WS-GRAPH:REQ-002 Implicit equalities are sampled over x/y coordinates and drawn as their zero contour.
export const FunctionGrapher = ({ soundEnabled }) => {
  const [equation, setEquation] = useState('x^2 + y^2 = 10');
  const [scale, setScale] = useState(40); // Pixels per unit
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const error = isValidEquation(equation) ? null : 'Invalid equation syntax';
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

    // Plot a bounded implicit equality or preserve the existing y=f(x) path.
    try {
      const equality = equation.split('=');
      ctx.strokeStyle = '#ec4899';
      ctx.lineWidth = 2.5;
      if (equality.length === 2) {
        const left = math.compile(equality[0].trim());
        const right = math.compile(equality[1].trim());
        const step = 4;
        const columns = Math.ceil(width / step) + 1;
        const rows = Math.ceil(height / step) + 1;
        const values = new Float32Array(columns * rows);

        for (let row = 0; row < rows; row++) {
          for (let column = 0; column < columns; column++) {
            const px = column * step;
            const py = row * step;
            const scope = {
              x: (px - centerX) / scale,
              y: (centerY - py) / scale,
            };
            values[row * columns + column] =
              left.evaluate(scope) - right.evaluate(scope);
          }
        }

        const crossing = (first, second) => {
          if ((first.value < 0) === (second.value < 0)) return null;
          const ratio = first.value / (first.value - second.value);
          return {
            x: first.x + (second.x - first.x) * ratio,
            y: first.y + (second.y - first.y) * ratio,
          };
        };

        ctx.beginPath();
        for (let row = 0; row < rows - 1; row++) {
          for (let column = 0; column < columns - 1; column++) {
            const x = column * step;
            const y = row * step;
            const corners = [
              { x, y, value: values[row * columns + column] },
              { x: x + step, y, value: values[row * columns + column + 1] },
              {
                x: x + step,
                y: y + step,
                value: values[(row + 1) * columns + column + 1],
              },
              { x, y: y + step, value: values[(row + 1) * columns + column] },
            ];
            const points = corners
              .map((corner, index) => crossing(corner, corners[(index + 1) % 4]))
              .filter(Boolean);

            for (let index = 0; index + 1 < points.length; index += 2) {
              ctx.moveTo(points[index].x, points[index].y);
              ctx.lineTo(points[index + 1].x, points[index + 1].y);
            }
          }
        }
        ctx.stroke();
      } else {
        const compiled = math.compile(equation);
        ctx.beginPath();
        let isDrawing = false;

        for (let px = 0; px <= width; px += 2) {
          const xVal = (px - centerX) / scale;
          try {
            const yVal = compiled.evaluate({ x: xVal });
            if (typeof yVal === 'number' && !isNaN(yVal) && isFinite(yVal)) {
              const py = centerY - yVal * scale;
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
      }
    } catch (error) {
      console.error('Unable to render equation graph:', error);
    }
  }, [equation, scale, offset]);

  return (
    <div className="function-grapher w-full animate-fade-in p-1">
      {/* Controls & Input */}
      <div className="grapher-equations glass-card p-4 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="flex-1 flex items-center u-bg-btn-num-bg border u-border-card-border rounded-xl px-3 py-2 font-mono">
            <label htmlFor="graph-equation" className="u-text-text-accent font-bold mr-2 text-sm">
              Equation
            </label>
            <input
              id="graph-equation"
              type="text"
              value={equation}
              onChange={(e) => setEquation(e.target.value)}
              aria-label="Equation"
              placeholder="e.g. x^2 + y^2 = 10"
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
      <div className="grapher-plot glass-card overflow-hidden relative">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={`Coordinate grid with labeled axes and plot of ${equation}`}
          className="w-full h-full block cursor-crosshair"
        />
      </div>
    </div>
  );
};
