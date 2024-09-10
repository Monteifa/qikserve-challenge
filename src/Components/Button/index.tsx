import { ButtonHTMLAttributes } from 'react';

import './index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  secondText?: string;
}

const Button = ({ text, secondText, ...props }: ButtonProps) => {
  return (
    <button {...props} className='button_container'>
      {text}
      {secondText && (
        <>
          <div className='divider_btn'></div>
          {secondText}
        </>
      )}
    </button>
  );
};

export default Button;
