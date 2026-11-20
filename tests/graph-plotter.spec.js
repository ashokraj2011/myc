import { describe, expect, it } from 'vitest';
import { normalizeEquation } from '../src/components/FunctionGrapher';

describe('implicit circle graphing', () => {
  // @ac:ARSHY:AC-001
  it('normalizes x^2 + y^2 = 36 and renders an implicit radius-6 contour', () => {
    const parsed = normalizeEquation('x^2 + y^2 = 36');

    expect(parsed).toEqual({
      kind: 'implicit',
      expression: '(x^2 + y^2) - (36)',
    });
  });
});

describe('supported Cartesian equation grammar', () => {
  // @ac:ARSHY:AC-002
  it.each([
    ['y = 2*x + 1', { kind: 'explicit', expression: '2*x + 1' }],
    ['y = (x - 2) / 2', { kind: 'explicit', expression: '(x - 2) / 2' }],
    ['x - y = 0', { kind: 'implicit', expression: '(x - y) - (0)' }],
  ])('normalizes %s', (input, expected) => {
    expect(normalizeEquation(input)).toEqual(expected);
  });
});
