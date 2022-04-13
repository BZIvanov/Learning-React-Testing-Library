import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserForm } from './';

describe('UserForm component', () => {
  test('Select 5 as fav number', () => {
    render(<UserForm title='Test title' />);

    const textField = screen.getByRole('textbox', { name: /favorite number/i });
    userEvent.type(textField, '5');

    expect(textField.value).toBe('5');

    const submitButton = screen.getByRole('button', { name: /select/i });
    fireEvent.click(submitButton);

    screen.getByText(/fav num is 5/i);
  });

  test('Set fav num to 30 if max is provided', () => {
    render(<UserForm title='Test title' max={30} />);

    const textField = screen.getByRole('textbox', { name: /favorite number/i });
    userEvent.type(textField, '55');

    expect(textField.value).toBe('30');

    const submitButton = screen.getByRole('button', { name: /select/i });
    fireEvent.click(submitButton);

    screen.getByText(/fav num is 30/i);
  });

  test('Set fav num to 0 if min is provided', () => {
    render(<UserForm title='Test title' min={0} max={30} />);

    const textField = screen.getByRole('textbox', { name: /favorite number/i });
    userEvent.type(textField, '-1');

    expect(textField.value).toBe('0');

    const submitButton = screen.getByRole('button', { name: /select/i });
    fireEvent.click(submitButton);

    screen.getByText(/fav num is 0/i);
  });

  test('Set fav num to 12 if 12 with letters is provided', () => {
    render(<UserForm title='Test title' min={0} max={30} />);

    const textField = screen.getByRole('textbox', { name: /favorite number/i });
    userEvent.type(textField, '12abc');

    const submitButton = screen.getByRole('button', { name: /select/i });
    fireEvent.click(submitButton);

    screen.getByText(/fav num is 12/i);
  });

  test('Set fav num to 0.5 if .5 is provided', () => {
    render(<UserForm title='Test title' min={0} max={30} />);

    const textField = screen.getByRole('textbox', { name: /favorite number/i });
    userEvent.type(textField, '.5');

    const submitButton = screen.getByRole('button', { name: /select/i });
    fireEvent.click(submitButton);

    screen.getByText(/fav num is 0.5/i);
  });

  test('Set fav num to -0.8 if -.8 is provided', () => {
    render(<UserForm title='Test title' />);

    const textField = screen.getByRole('textbox', { name: /favorite number/i });
    userEvent.type(textField, '-.8');

    const submitButton = screen.getByRole('button', { name: /select/i });
    fireEvent.click(submitButton);

    screen.getByText(/fav num is -0.8/i);
  });

  test('Button is disabled and the value is empty for text only', () => {
    render(<UserForm title='Test title' />);

    const textField = screen.getByRole('textbox', {
      name: /favorite number/i,
    });
    userEvent.type(textField, 'abc');

    expect(textField.value).toBe('');

    const submitButton = screen.getByRole('button', { name: /select/i });
    fireEvent.click(submitButton);
    expect(submitButton).toBeDisabled();

    const favNumText = screen.queryByText(/fav num is 5/i);
    expect(favNumText).not.toBeInTheDocument();
  });

  test('Set value to 0 if 00 is provided and min is set to 0', () => {
    render(<UserForm title='Test title' min={0} />);

    const textField = screen.getByRole('textbox', {
      name: /favorite number/i,
    });
    userEvent.type(textField, '00');

    const submitButton = screen.getByRole('button', { name: /select/i });
    fireEvent.click(submitButton);

    screen.getByText(/fav num is 0/i);
  });
});
