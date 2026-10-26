import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { createElement } from 'react';
import { FunctionGrapher } from './FunctionGrapher';

const context = {
  scale: vi.fn(),
  fillRect: vi.fn(),
  beginPath: vi.fn(),
  moveTo: vi.fn(),
  lineTo: vi.fn(),
  stroke: vi.fn(),
  fillText: vi.fn(),
  arc: vi.fn(),
  fill: vi.fn(),
};

describe('FunctionGrapher approved sine plot', () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  // @ac:GRAPH-PLOT:AC-001 Verifies the sine readout and the 30-degree marker at its radian coordinate.
  it('plots sin(x) and marks the 30-degree evaluation at (π/6, 0.5)', () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(context);
    vi.spyOn(HTMLCanvasElement.prototype, 'clientWidth', 'get').mockReturnValue(400);
    vi.spyOn(HTMLCanvasElement.prototype, 'clientHeight', 'get').mockReturnValue(280);

    const { container } = render(createElement(FunctionGrapher, { soundEnabled: false }));

    expect(screen.getByText('sin(x)')).toBeInTheDocument();
    expect(screen.getByTestId('sine-evaluation')).toHaveTextContent('sin(30°) = 0.5');
    expect(container.querySelector('input')).toBeNull();
    expect(context.arc).toHaveBeenCalledWith(
      220.94395102393195,
      120,
      5,
      0,
      Math.PI * 2
    );
    expect(context.fillText).toHaveBeenCalledWith(
      'sin(30°) = 0.5',
      228.94395102393195,
      112
    );
  });
});
