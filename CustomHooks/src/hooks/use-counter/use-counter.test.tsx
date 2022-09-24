import { renderHook, act } from '@testing-library/react';
import useCounter from './use-counter';

describe('useCounter', () => {
  test('should render initial value of 0', () => {
    const { result } = renderHook(useCounter);

    expect(result.current.count).toBe(0);
  });

  test('should render custom provided initial value', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialValue: 5 },
    });

    expect(result.current.count).toBe(5);
  });

  test('should increment the value by 1 if increment is called', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());

    // act assures updates are processed before assertions
    expect(result.current.count).toBe(1);
  });

  test('should decrement the value by 2 if decrement is called twice', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    act(() => result.current.decrement());

    expect(result.current.count).toBe(-2);
  });
});
