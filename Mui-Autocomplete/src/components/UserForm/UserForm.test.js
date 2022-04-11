import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { UserForm } from './';

describe('UserForm component', () => {
  test('Renders the correct title', () => {
    render(<UserForm title='Test title' />);

    // no need of expect from jest, because getByRole throws error by default if element is not found and the test will fail. Read more here: https://testing-library.com/docs/queries/about
    screen.getByRole('heading', { name: /test title/i });
  });

  test('Title is green color', () => {
    render(<UserForm title='Test title' />);

    const headingElement = screen.getByRole('heading', { name: /test title/i });
    expect(headingElement).toHaveStyle('color: lightgreen; font-weight: 400');
  });

  test('Renders banana fruit as initial value', () => {
    render(<UserForm title='Test title' />);

    const fruitsDropdown = screen.getByRole('combobox', {
      name: /fruits/i,
    });
    expect(fruitsDropdown.value).toBe('Banana');
  });

  test('Change the value to apple', () => {
    render(<UserForm title='Test title' />);

    const fruitsDropdown = screen.getByRole('combobox', {
      name: /fruits/i,
    });
    fruitsDropdown.focus();
    fireEvent.change(fruitsDropdown, { target: { value: 'Apple' } });

    expect(fruitsDropdown.value).toBe('Apple');
  });

  test('Submit form with avocado', async () => {
    render(<UserForm title='Test title' />);

    const fruitsDropdown = screen.getByRole('combobox', {
      name: /fruits/i,
    });
    fruitsDropdown.focus();
    fireEvent.change(fruitsDropdown, { target: { value: 'Avocado' } });
    fireEvent.keyDown(fruitsDropdown, { key: 'ArrowDown' });
    fireEvent.keyDown(fruitsDropdown, { key: 'Enter' });

    const submitButton = screen.getByRole('button', { name: /complete/i });
    fireEvent.click(submitButton);

    const appleText = await screen.findByText(/submitted fruit is: avocado/i);

    expect(appleText).toBeInTheDocument();
  });
});
