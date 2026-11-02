import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FunctionGrapher } from './FunctionGrapher';

const createCanvasContext = () => {
  let strokeStyle;
  const plottedPoints = [];
  return {
    plottedPoints,
    context: {
      scale: vi.fn(),
      fillRect: vi.fn(),
      beginPath: vi.fn(),
      moveTo: vi.fn((x, y) => {
        if (strokeStyle === '#ec4899') plottedPoints.push([x, y]);
      }),
      lineTo: vi.fn((x, y) => {
        if (strokeStyle === '#ec4899') plottedPoints.push([x, y]);
      }),
      stroke: vi.fn(),
      fillText: vi.fn(),
      set strokeStyle(value) {
        strokeStyle = value;
      },
      set fillStyle(_value) {},
      set lineWidth(_value) {},
      set font(_value) {},
    },
  };
};

const installCanvas = () => {
  const { context, plottedPoints } = createCanvasContext();
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(context);
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(400);
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(280);
  return plottedPoints;
};

afterEach(() => {
  vi.restoreAllMocks();
});

describe('FunctionGrapher', () => {
  // @ac:MYL-GRAPH:AC-001
  it('plots the sine curve over the visible x range', () => {
    const plottedPoints = installCanvas();
    render(<FunctionGrapher soundEnabled={false} />);

    const pointAtOne = plottedPoints.find(([x]) => x === 240);
    expect(pointAtOne?.[1]).toBeCloseTo(140 - Math.sin(1) * 40, 4);
  });

  it('updates the plotted graph when a person enters an equation', async () => {
    const user = userEvent.setup();
    const plottedPoints = installCanvas();
    render(<FunctionGrapher soundEnabled={false} />);

    const equationInput = screen.getByPlaceholderText('e.g. sin(x)');
    await user.clear(equationInput);
    plottedPoints.length = 0;
    await user.type(equationInput, 'x^2');

    const pointAtOne = plottedPoints.find(([x]) => x === 240);
    expect(pointAtOne?.[1]).toBeCloseTo(100, 4);
  });
});
