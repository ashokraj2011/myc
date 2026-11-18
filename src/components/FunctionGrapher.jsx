import { useEffect, useMemo, useRef, useState } from 'react';
import * as math from 'mathjs';
import {
  MousePointer2,
  PanelLeftClose,
  Plus,
  Redo2,
  RotateCcw,
  Settings2,
  Undo2,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { playSound } from '../utils/audio';

const PRESETS = [
  { label: 'sin(x)', expression: 'sin(x)' },
  { label: 'x²', expression: 'x^2 - 4' },
  { label: 'cos(x) * x', expression: 'cos(x) * x' },
  { label: 'tan(x)', expression: 'tan(x)' },
  { label: 'Damped Sine', expression: 'exp(-0.2*x) * sin(3*x)' },
];

const INITIAL_EXPRESSIONS = [
  { id: 'function-1', kind: 'function', expression: 'sin(x)', color: '#ec4899' },
  { id: 'circle-6', kind: 'circle', expression: 'x^2 + y^2 = 36', color: '#a78bfa' },
];

export const FunctionGrapher = ({ soundEnabled }) => {
  const [expressions, setExpressions] = useState(INITIAL_EXPRESSIONS);
  const [scale, setScale] = useState(40);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [panelCollapsed, setPanelCollapsed] = useState(false);
  const canvasRef = useRef(null);
  const nextExpressionId = useRef(3);
  const plottedExpressions = useMemo(
    () =>
      expressions.map((expression) => {
        if (expression.kind === 'circle') return expression;

        try {
          return { ...expression, compiled: math.compile(expression.expression), error: null };
        } catch {
          return { ...expression, compiled: null, error: 'Invalid function syntax' };
        }
      }),
    [expressions]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (!width || !height) return;

      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);

      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.scale(pixelRatio, pixelRatio);
      ctx.fillStyle = '#050a14';
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2 + offset.x;
      const centerY = height / 2 + offset.y;

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
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.font = '10px monospace';
          ctx.textAlign = 'left';
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
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.font = '10px monospace';
          ctx.textAlign = 'left';
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

      ctx.fillStyle = '#38bdf8';
      ctx.font = '12px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('x', width - 8, centerY - 8);
      ctx.textAlign = 'left';
      ctx.fillText('y', centerX + 8, 14);

      plottedExpressions.forEach((expression) => {
        if (expression.kind === 'circle') {
          // @clause:NEW-GRAPJ:REQ-002 Draw x^2 + y^2 = 36 parametrically in the same Cartesian transform.
          ctx.strokeStyle = expression.color;
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          for (let degree = 0; degree <= 360; degree++) {
            const radians = (degree * Math.PI) / 180;
            const px = centerX + 6 * Math.cos(radians) * scale;
            const py = centerY - 6 * Math.sin(radians) * scale;
            if (degree === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
          return;
        }

        if (!expression.compiled) return;

        // @clause:NEW-GRAPJ:REQ-001 Plot each compiled y=f(x) expression in the Cartesian plane.
        ctx.strokeStyle = expression.color;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        let isDrawing = false;

        for (let px = 0; px <= width; px += 2) {
          const xValue = (px - centerX) / scale;
          try {
            const yValue = expression.compiled.evaluate({ x: xValue });
            if (typeof yValue !== 'number' || !Number.isFinite(yValue)) {
              isDrawing = false;
              continue;
            }

            const py = centerY - yValue * scale;
            if (py < -height || py > height * 2) {
              isDrawing = false;
              continue;
            }

            if (!isDrawing) {
              ctx.moveTo(px, py);
              isDrawing = true;
            } else {
              ctx.lineTo(px, py);
            }
          } catch {
            isDrawing = false;
          }
        }
        ctx.stroke();
      });
    };

    draw();
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, [offset, panelCollapsed, plottedExpressions, scale]);

  const addExpression = () => {
    const id = `function-${nextExpressionId.current++}`;
    setExpressions((current) => [
      ...current,
      { id, kind: 'function', expression: 'x', color: '#fbbf24' },
    ]);
  };

  const updateExpression = (id, value) => {
    setExpressions((current) =>
      current.map((expression) =>
        expression.id === id ? { ...expression, expression: value } : expression
      )
    );
  };

  const removeExpression = (id) => {
    setExpressions((current) =>
      current.filter((expression) => expression.id !== id || expression.kind === 'circle')
    );
  };

  const applyPreset = (value) => {
    playSound('click', soundEnabled);
    setExpressions((current) => {
      const firstFunction = current.find((expression) => expression.kind === 'function');
      if (!firstFunction) {
        const id = `function-${nextExpressionId.current++}`;
        return [...current, { id, kind: 'function', expression: value, color: '#ec4899' }];
      }

      return current.map((expression) =>
        expression.id === firstFunction.id ? { ...expression, expression: value } : expression
      );
    });
  };

  // @clause:NEW-GRAPJ:REQ-003 Present the expression list and required graph controls.
  // @clause:NEW-GRAPJ:AC-002 Provide the visual acceptance surface for the graph layout.
  return (
    <section className="graph-workspace">
      <div className="graph-toolbar" role="toolbar" aria-label="Graph controls">
        <div className="graph-toolbar-title">
          <h2>Graphing workspace</h2>
        </div>
        <div className="graph-toolbar-actions">
          <button type="button" className="graph-icon-button calc-btn" aria-label="Add expression" onClick={addExpression}>
            <Plus aria-hidden="true" />
          </button>
          <button type="button" className="graph-icon-button calc-btn" aria-label="Undo" disabled>
            <Undo2 aria-hidden="true" />
          </button>
          <button type="button" className="graph-icon-button calc-btn" aria-label="Redo" disabled>
            <Redo2 aria-hidden="true" />
          </button>
          <button type="button" className="graph-icon-button calc-btn" aria-label="Settings">
            <Settings2 aria-hidden="true" />
          </button>
          <button
            type="button"
            className="graph-icon-button calc-btn"
            aria-label={panelCollapsed ? 'Expand expression panel' : 'Collapse expression panel'}
            aria-expanded={!panelCollapsed}
            onClick={() => setPanelCollapsed((collapsed) => !collapsed)}
          >
            <PanelLeftClose aria-hidden="true" />
          </button>
          <button type="button" className="graph-icon-button calc-btn" aria-label="Graph tool" aria-pressed="true">
            <MousePointer2 aria-hidden="true" />
          </button>
          <span className="graph-toolbar-divider" aria-hidden="true" />
          <button
            type="button"
            className="graph-icon-button calc-btn"
            aria-label="Zoom in"
            onClick={() => {
              playSound('click', soundEnabled);
              setScale((currentScale) => Math.min(currentScale * 1.25, 200));
            }}
          >
            <ZoomIn aria-hidden="true" />
          </button>
          <button
            type="button"
            className="graph-icon-button calc-btn"
            aria-label="Zoom out"
            onClick={() => {
              playSound('click', soundEnabled);
              setScale((currentScale) => Math.max(currentScale / 1.25, 10));
            }}
          >
            <ZoomOut aria-hidden="true" />
          </button>
          <button
            type="button"
            className="graph-icon-button calc-btn"
            aria-label="Reset view"
            onClick={() => {
              setScale(40);
              setOffset({ x: 0, y: 0 });
            }}
          >
            <RotateCcw aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={`graph-layout${panelCollapsed ? ' graph-layout--collapsed' : ''}`}>
        {!panelCollapsed && (
          <aside className="graph-expression-panel" aria-label="Expression list">
            <div className="graph-panel-heading">
              <div>
                <h3>Expression list</h3>
                <p>Plot functions on the Cartesian plane</p>
              </div>
              <button type="button" className="graph-icon-button graph-add-button calc-btn" aria-label="Add expression" onClick={addExpression}>
                <Plus aria-hidden="true" />
              </button>
            </div>

            <div className="graph-expression-list">
              {expressions.map((expression, index) =>
                expression.kind === 'circle' ? (
                  <div className="graph-expression-row" key={expression.id}>
                    <span className="graph-expression-swatch" style={{ backgroundColor: expression.color }} />
                    <div className="graph-circle-expression">
                      <strong>Circle</strong>
                      <span>x² + y² = 36</span>
                    </div>
                  </div>
                ) : (
                  <div className="graph-expression-row" key={expression.id}>
                    <span className="graph-expression-swatch" style={{ backgroundColor: expression.color }} />
                    <label className="graph-function-input">
                      <span>y =</span>
                      <input
                        aria-label={`Expression ${index + 1}`}
                        value={expression.expression}
                        onChange={(event) => updateExpression(expression.id, event.target.value)}
                        spellCheck="false"
                      />
                    </label>
                    <button
                      type="button"
                      className="graph-remove-button calc-btn"
                      aria-label={`Remove expression ${index + 1}`}
                      onClick={() => removeExpression(expression.id)}
                    >
                      <X aria-hidden="true" />
                    </button>
                  </div>
                )
              )}
              {plottedExpressions.map(
                (expression) =>
                  expression.error && (
                    <p className="graph-expression-error" role="alert" key={`${expression.id}-error`}>
                      {expression.error}
                    </p>
                  )
              )}
            </div>
            <div className="graph-presets">
              <span>Presets</span>
              <div>
                {PRESETS.map((preset) => (
                  <button
                    type="button"
                    className="graph-preset-button calc-btn"
                    key={preset.label}
                    onClick={() => applyPreset(preset.expression)}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        )}

        <div className="graph-canvas-panel">
          <canvas
            ref={canvasRef}
            className="graph-canvas"
            role="img"
            aria-label="Cartesian graph with labeled x and y axes"
          />
        </div>
      </div>
    </section>
  );
};
