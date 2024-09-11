import { ButtonHTMLAttributes } from 'react';

import { useDataContext } from '../../contexts/DataContext';

import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  secondText?: string;
}

const Button = ({ text, secondText, ...props }: ButtonProps) => {
  const { restaurant } = useDataContext();

  return (
    <button
      {...props}
      className='button_container'
      style={{ backgroundColor: restaurant?.webSettings.primaryColour }}
    >
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

export { Button };
