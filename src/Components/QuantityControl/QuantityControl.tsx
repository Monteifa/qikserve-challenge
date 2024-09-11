import { FaPlus, FaMinus } from 'react-icons/fa6';

import './QuantityControl.css';

interface QuantityControlProps {
  qty: number;
  setQuantity: (data: number) => void;
  allowRemove?: boolean;
  size: 'small' | 'default';
}

const QuantityControl = ({
  qty,
  setQuantity,
  allowRemove,
  size,
}: QuantityControlProps) => {
  return (
    <div className='control_container'>
      <button
        className={`icon_circle ${size}`}
        onClick={() => setQuantity(qty - 1)}
        disabled={!allowRemove && qty === 1}
      >
        <FaMinus />
      </button>
      <p className='controls_counter'>{qty}</p>

      <button
        className={`icon_circle ${size}`}
        onClick={() => setQuantity(qty + 1)}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export { QuantityControl };
