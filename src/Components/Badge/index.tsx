import { ReactNode } from 'react';

import './index.css';

const Badge = ({ children }: { children: ReactNode }) => {
  return <div className='badge'>{children}</div>;
};

export default Badge;
