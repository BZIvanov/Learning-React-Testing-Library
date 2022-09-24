import { useState, useEffect, FC } from 'react';
import { EmployeeCardProps } from './EmployeeCard.interface';

const EmployeeCard: FC<EmployeeCardProps> = ({ firstName }) => {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAvailable(true);
    }, 1001);
  }, []);

  return (
    <>
      <p>Hello {firstName}!</p>

      {available && <button>Available</button>}
    </>
  );
};

export default EmployeeCard;
