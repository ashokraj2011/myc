import { describe, expect, it } from 'vitest';
import { formatHexadecimal, isHexConvertible } from './hexadecimal';

describe('isHexConvertible', () => {
  // @ac:check-out-test:AC-001 @ac:check-out-test:AC-002
  it('accepts finite signed whole numbers, including zero', () => {
    expect(isHexConvertible(0)).toBe(true);
    expect(isHexConvertible(255)).toBe(true);
    expect(isHexConvertible(-255)).toBe(true);
  });

  // @ac:check-out-test:AC-003
  it('rejects fractional, invalid, and non-finite values', () => {
    expect(isHexConvertible(1.5)).toBe(false);
    expect(isHexConvertible(Number.NaN)).toBe(false);
    expect(isHexConvertible(Number.POSITIVE_INFINITY)).toBe(false);
    expect(isHexConvertible(null)).toBe(false);
    expect(isHexConvertible('Error')).toBe(false);
  });
});

describe('formatHexadecimal', () => {
  // @ac:check-out-test:AC-001 @ac:check-out-test:AC-002
  it('formats zero and signed values with uppercase digits and a 0x prefix', () => {
    expect(formatHexadecimal(0)).toBe('0x0');
    expect(formatHexadecimal(255)).toBe('0xFF');
    expect(formatHexadecimal(-255)).toBe('-0xFF');
  });

  it('refuses values that are not finite whole numbers', () => {
    expect(() => formatHexadecimal(1.5)).toThrow(RangeError);
    expect(() => formatHexadecimal(Number.POSITIVE_INFINITY)).toThrow(RangeError);
  });
});
