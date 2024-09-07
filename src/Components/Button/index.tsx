import { ButtonHTMLAttributes, ReactNode } from 'react';

import './index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className='button-container'>
      {children}
    </button>
  );
};

export default Button;
