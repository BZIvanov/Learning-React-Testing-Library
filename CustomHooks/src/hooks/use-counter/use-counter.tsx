import { useState } from 'react';
import { UseCounterProps } from './use-counter.interface';

const useCounter = ({ initialValue = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((prevValue) => prevValue + 1);
  const decrement = () => setCount((prevValue) => prevValue - 1);

  return { count, increment, decrement };
};

export default useCounter;
