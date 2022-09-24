import { render, screen } from '@testing-library/react';
import EmployeeCard from './EmployeeCard';

describe('EmployeeCard component', () => {
  test('renders greeting text with the correct employee name', () => {
    render(<EmployeeCard firstName='Ivan' />);
    const greetingText = screen.getByText(/hello ivan!/i);
    expect(greetingText).toBeInTheDocument(); // toBeInTheDocument is provided by jest-dom
  });

  test('renders availability status', async () => {
    render(<EmployeeCard firstName='Ivan' />);
    // findByText is returning a promise so we need to await it
    const availabilityText = await screen.findByRole(
      'button',
      { name: /Available/i },
      { timeout: 2000 } // the default is 1000 ms so if we want to wait longer we need to specify the timeout option as third parameter to findByRole
    );
    expect(availabilityText).toBeInTheDocument();
  });
});
