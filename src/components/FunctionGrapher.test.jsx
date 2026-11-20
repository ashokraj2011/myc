import { describe, expect, it } from 'vitest';
import {
  normalizeEquation,
  sampleExplicitPlot,
  sampleImplicitPlot,
} from './FunctionGrapher';

describe('implicit circle graphing helpers', () => {
  it('samples a centered radius-6 contour for x^2 + y^2 = 36', () => {
    const parsed = normalizeEquation('x^2 + y^2 = 36');
    expect(parsed?.kind).toBe('implicit');

    const width = 400;
    const height = 280;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = Math.min(width / 14, height / 14);
    const segments = sampleImplicitPlot(parsed.expression, width, height, scale, centerX, centerY, 2);

    expect(segments.length).toBeGreaterThan(100);

    const midpoints = segments.map((segment) => {
      const px = (segment.start.px + segment.end.px) / 2;
      const py = (segment.start.py + segment.end.py) / 2;
      return {
        x: (px - centerX) / scale,
        y: (centerY - py) / scale,
      };
    });
    const meanX = midpoints.reduce((sum, point) => sum + point.x, 0) / midpoints.length;
    const meanY = midpoints.reduce((sum, point) => sum + point.y, 0) / midpoints.length;
    const radiusErrors = midpoints.map((point) => Math.abs(Math.hypot(point.x, point.y) - 6));

    expect(Math.abs(meanX)).toBeLessThan(0.25);
    expect(Math.abs(meanY)).toBeLessThan(0.25);
    expect(Math.min(...radiusErrors)).toBeLessThan(0.5);
  });
});

describe('Cartesian equation grammar helpers', () => {
  it('samples the approved explicit and implicit equations', () => {
    const linePoints = sampleExplicitPlot('2*x + 1', 400, 280, 40, 200, 140, 2);
    expect(linePoints.length).toBeGreaterThan(100);
    expect(linePoints.find((point) => point.x === 0)?.y).toBe(1);

    const dividedPoints = sampleExplicitPlot('(x - 2) / 2', 400, 280, 40, 200, 140, 2);
    expect(dividedPoints.find((point) => point.x === 2)?.y).toBe(0);

    const implicitSegments = sampleImplicitPlot('(x - y) - (0)', 400, 280, 40, 200, 140, 2);
    expect(implicitSegments.length).toBeGreaterThan(100);
    expect(sampleImplicitPlot('(x - y) - (0)', 300, 150, 40, 150, 75, 2).length).toBeGreaterThan(0);
  });

  it('rejects unsupported expression characters', () => {
    expect(normalizeEquation('sin(x)!')).toBeNull();
  });

  it('rejects malformed equals expressions', () => {
    expect(normalizeEquation('x = y = 36')).toBeNull();
  });
});
