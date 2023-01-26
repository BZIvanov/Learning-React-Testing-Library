import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/FollowIcon.jsx', () => {
  return () => {
    return 'Icon test placeholder';
  };
});

describe('App component', () => {
  test('replace actual component with test component', () => {
    render(<App />);

    const appHeader = screen.getByRole('heading', 'My App file');
    const fakeComponent = screen.getByText('Icon test placeholder');

    expect(appHeader).toBeInTheDocument();
    expect(fakeComponent).toBeInTheDocument();
  });
});
