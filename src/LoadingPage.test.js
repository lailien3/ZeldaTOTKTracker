import { render, screen } from '@testing-library/react';
import LoadingPage from './LoadingPage';

test('renders learn react link', () => {
  render(<LoadingPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
