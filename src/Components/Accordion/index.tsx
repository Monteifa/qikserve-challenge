import { ReactNode } from 'react';

import { FaChevronDown } from 'react-icons/fa6';

import './index.css';

interface AccordionProps {
  children: ReactNode;
  title: string;
}

const Accordion = ({ children, title }: AccordionProps) => {
  return (
    <details open>
      <summary className='accordion_header'>
        <h2 className='accordion_title'>{title}</h2>

        <FaChevronDown className='accordion_icon' />
      </summary>

      {children}
    </details>
  );
};

export default Accordion;
