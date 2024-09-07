import './index.css';

import { FaPlus, FaMinus } from 'react-icons/fa6';

interface QuantityControlProps {
  qty: number;
  setQuantity: (data: number) => void;
  allowRemove?: boolean;
}

const QuantityControler = ({
  qty,
  setQuantity,
  allowRemove,
}: QuantityControlProps) => {
  return (
    <div className='control-container'>
      <button
        className='icon-circle'
        onClick={() => setQuantity(qty - 1)}
        disabled={!allowRemove && qty === 1}
      >
        <FaMinus />
      </button>
      <p className='controls_counter'>{qty}</p>

      <button className='icon-circle' onClick={() => setQuantity(qty + 1)}>
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityControler;
