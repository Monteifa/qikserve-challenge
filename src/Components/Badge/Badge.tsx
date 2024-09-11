import { ReactNode } from 'react';

import { useDataContext } from '../../contexts/DataContext';

import './Badge.css';

const Badge = ({ children }: { children: ReactNode }) => {
  const { restaurant } = useDataContext();
  return (
    <span
      className='badge'
      style={{ backgroundColor: restaurant?.webSettings.primaryColour }}
    >
      {children}
    </span>
  );
};

export { Badge };
