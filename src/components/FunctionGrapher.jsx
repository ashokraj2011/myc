import { useState, useEffect, useRef } from 'react';
import * as math from 'mathjs';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { playSound } from '../utils/audio';

const sineFunction = math.compile('sin(x)');
const evaluationX = Math.PI / 6;
const evaluationY = Math.sin(evaluationX);

// @clause:GRAPH-PLOT:REQ-001 The grapher plots the approved sine function and marks sin(30°) = 0.5 at x = π/6.
// @clause:GRAPH-PLOT:AC-001 The graph includes the 30° evaluation marker and its visible value label.
/**
 * Renders the fixed sine plot and its 30-degree evaluation.
 * @param {{ soundEnabled: boolean }} props Controls sound for the view buttons.
 * @returns {JSX.Element} The sine plot controls, evaluation, and canvas.
 */
export const FunctionGrapher = ({ soundEnabled }) => {
  const [scale, setScale] = useState(40); // Pixels per unit
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  // Render the approved sine graph whenever its view changes.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
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

    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    let isDrawing = false;
    const step = 2; // Pixel step

    for (let px = 0; px <= width; px += step) {
      const xVal = (px - centerX) / scale;
      const yVal = sineFunction.evaluate({ x: xVal });
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
    }
    ctx.stroke();

    const markerX = centerX + evaluationX * scale;
    const markerY = centerY - evaluationY * scale;
    ctx.fillStyle = '#facc15';
    ctx.beginPath();
    ctx.arc(markerX, markerY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '12px monospace';
    ctx.fillText('sin(30°) = 0.5', markerX + 8, markerY - 8);
  }, [scale, offset]);

  return (
    <div className="w-full flex flex-col gap-4 animate-fade-in p-1">
      {/* Controls & Input */}
      <div className="glass-card p-4 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="flex-1 flex items-center u-bg-btn-num-bg border u-border-card-border rounded-xl px-3 py-2 font-mono">
            <span className="u-text-text-accent font-bold mr-2 text-sm">f(x) =</span>
            <span className="u-text-text-main w-full text-sm font-semibold">sin(x)</span>
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

        <p className="text-sm u-text-text-muted" data-testid="sine-evaluation">
          sin(30°) = 0.5
        </p>
      </div>

      {/* Interactive Canvas */}
      <div className="glass-card w-full h-[280px] overflow-hidden relative">
        <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />
      </div>
    </div>
  );
};
