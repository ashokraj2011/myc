import { useState } from 'react';
import { nCr } from '../utils/evaluator';

const styles = {
  root: { width: '100%', padding: '0.25rem' },
  card: { display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '1.25rem' },
  heading: { margin: 0, color: 'var(--text-main)', fontSize: '1.125rem', fontWeight: 700 },
  description: { margin: '0.25rem 0 0', color: 'var(--text-muted)', fontSize: '0.875rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  fields: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 14rem), 1fr))',
    gap: '0.75rem',
  },
  field: { display: 'flex', flexDirection: 'column', gap: '0.375rem' },
  label: { color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 },
  input: {
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '2.75rem',
    padding: '0.625rem 0.75rem',
    border: '1px solid var(--card-border)',
    borderRadius: '0.75rem',
    outlineColor: 'var(--text-accent)',
    background: 'var(--btn-num-bg)',
    color: 'var(--text-main)',
    font: "600 1rem 'JetBrains Mono', monospace",
  },
  error: { margin: 0, color: '#e11d48', fontSize: '0.875rem' },
  submit: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: 0,
    background: 'var(--btn-eq-bg)',
    color: 'var(--btn-eq-text)',
    fontSize: '0.875rem',
    fontWeight: 700,
  },
  result: { display: 'flex', flexDirection: 'column', gap: '0.375rem', minHeight: 'auto' },
  resultLabel: { color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 },
  output: {
    color: 'var(--text-accent)',
    font: "700 1.5rem 'JetBrains Mono', monospace",
    overflowWrap: 'anywhere',
  },
};

// @clause:FACT-01:REQ-002 lets users enter n and r and request an nCr result
// @clause:FACT-01:REQ-004 withholds results for invalid or incomplete inputs
/** Renders the nCr form and withholds output until valid inputs are submitted. */
export const CombinationCalculator = () => {
  const [n, setN] = useState('');
  const [r, setR] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    setResult(null);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(null);
    setError('');

    try {
      setResult(nCr(n, r).toString());
    } catch (cause) {
      if (!(cause instanceof TypeError)) throw cause;
      setError('Enter positive integer values for n and r.');
    }
  };

  return (
    <section className="animate-fade-in" style={styles.root}>
      <div className="glass-card" style={styles.card}>
        <div>
          <h2 style={styles.heading}>Combination Calculator</h2>
          <p style={styles.description}>Calculate how many ways to choose r items from n.</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.fields}>
            <div style={styles.field}>
              <label htmlFor="combination-n" style={styles.label}>n (total items)</label>
              <input
                id="combination-n"
                type="text"
                inputMode="numeric"
                value={n}
                onChange={handleInputChange(setN)}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'combination-error' : undefined}
                style={error ? { ...styles.input, borderColor: '#e11d48' } : styles.input}
              />
            </div>
            <div style={styles.field}>
              <label htmlFor="combination-r" style={styles.label}>r (items to choose)</label>
              <input
                id="combination-r"
                type="text"
                inputMode="numeric"
                value={r}
                onChange={handleInputChange(setR)}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'combination-error' : undefined}
                style={error ? { ...styles.input, borderColor: '#e11d48' } : styles.input}
              />
            </div>
          </div>

          {error && (
            <p id="combination-error" role="alert" style={styles.error}>
              {error}
            </p>
          )}

          <button type="submit" className="calc-btn" style={styles.submit}>
            Calculate nCr
          </button>
        </form>

        {result !== null && (
          <div className="calculator-display" style={styles.result}>
            <span style={styles.resultLabel}>Result</span>
            <output aria-label="Combination result" style={styles.output}>
              {result}
            </output>
          </div>
        )}
      </div>
    </section>
  );
};
