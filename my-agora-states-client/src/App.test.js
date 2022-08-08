import { render, screen } from '@testing-library/react';
import App from './App';

test('My Agora States', () => {
  render(<App />);
  const linkElement = screen.getByText(/Agora/i);
  expect(linkElement).toBeInTheDocument();
});

test('실험👩‍🔬', () => {
  expect(2+2).toBe(4);
});

test('실험2👩‍🔬', () => {
  expect(2+2).toBe(4);
});
