// @clause:check-out-test:REQ-002 Eligibility is limited to finite whole numbers.
/** Checks whether an evaluator result is a finite whole number. */
export const isHexConvertible = (value) =>
  typeof value === 'number' && Number.isFinite(value) && Number.isInteger(value);

// @clause:check-out-test:REQ-003 Conversion formats the signed result without altering its source.
/** Formats an eligible number as signed, uppercase hexadecimal with a 0x prefix. */
export const formatHexadecimal = (value) => {
  if (!isHexConvertible(value)) {
    throw new RangeError('Hexadecimal conversion requires a finite whole number');
  }

  const sign = value < 0 ? '-' : '';
  return `${sign}0x${Math.abs(value).toString(16).toUpperCase()}`;
};
