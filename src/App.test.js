import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CLI-EIOS heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/CLI-EIOS/i);
  expect(headingElement).toBeInTheDocument();
});
