import { Order, useCartContext } from '../../contexts/CartContext';
import QuantityControler from '../QuantityControl';

import './index.css';

const { format } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const CartItem = ({ id, name, price, quantity, modifier }: Order) => {
  const { updateCart } = useCartContext();

  const handleSetQuantity = (qty: number) => {
    updateCart({ id, name, price, quantity: qty, modifier });
  };

  const itemPrice = quantity * (price || modifier?.price || 0);

  return (
    <div className='cart_item_container'>
      <div>
        <p className='cart_item_name'>{name}</p>
        <p className='cart_item_modifier'>{modifier?.name}</p>

        <QuantityControler
          qty={quantity}
          setQuantity={handleSetQuantity}
          allowRemove
          size='small'
        />
      </div>

      <div>
        <p className='cart-item_price'>{format(itemPrice)}</p>
      </div>
    </div>
  );
};

export default CartItem;
