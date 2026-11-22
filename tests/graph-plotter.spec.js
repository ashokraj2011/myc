import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FunctionGrapher } from '../src/components/FunctionGrapher';

describe('graph plotter', () => {
  // @ac:D-STORY:AC-001
  it('starts with sin(x) and provides the Cartesian canvas', () => {
    render(React.createElement(FunctionGrapher, { soundEnabled: false }));

    expect(screen.getByPlaceholderText('e.g. sin(x)')).toHaveValue('sin(x)');
    expect(document.querySelector('canvas')).toBeInTheDocument();
  });

  // @ac:D-STORY:AC-002
  it('accepts and replaces the radius-six circle expression', async () => {
    const user = userEvent.setup();
    render(React.createElement(FunctionGrapher, { soundEnabled: false }));

    const input = screen.getByPlaceholderText('e.g. sin(x)');
    await user.clear(input);
    await user.type(input, 'x^2 + y^2 = 36');
    expect(input).toHaveValue('x^2 + y^2 = 36');
  });

  // @ac:D-STORY:AC-003
  it('updates to a supported function after replacing an equation', async () => {
    const user = userEvent.setup();
    render(React.createElement(FunctionGrapher, { soundEnabled: false }));

    const input = screen.getByPlaceholderText('e.g. sin(x)');
    await user.clear(input);
    await user.type(input, 'cos(x)');
    expect(input).toHaveValue('cos(x)');
  });
});
