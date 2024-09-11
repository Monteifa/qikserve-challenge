import { ReactNode } from 'react';

import { FaChevronDown } from 'react-icons/fa6';

import './Accordion.css';

interface AccordionProps {
  children: ReactNode;
  title: string;
  id: number;
}

const Accordion = ({ children, title, id }: AccordionProps) => {
  return (
    <details id={`${id}`} open>
      <summary className='accordion_header'>
        <h2 className='accordion_title'>{title}</h2>

        <FaChevronDown className='accordion_icon' />
      </summary>

      {children}
    </details>
  );
};

export { Accordion };
