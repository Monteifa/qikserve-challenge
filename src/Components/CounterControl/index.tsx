import React, { useState } from 'react';

import './index.css';

import { FaPlus, FaMinus } from 'react-icons/fa6';

const CounterControl = () => {
  const [count, setCount] = useState();

  return (
    <div className='control-container'>
      <div className='icon-circle'>
        <FaMinus color='white' />
      </div>
      <p className='controls_counter'>1</p>

      <div className='icon-circle'>
        <FaPlus color='white' />
      </div>
    </div>
  );
};

export default CounterControl;
