import { ReactNode } from 'react';

import './index.css';

const Badge = ({ children }: { children: ReactNode }) => {
  return <span className='badge'>{children}</span>;
};

export default Badge;
