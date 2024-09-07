import { ReactNode } from 'react';

import './index.css';

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <div className='button-container'>{children}</div>;
};

export default Button;
