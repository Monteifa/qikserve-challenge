import { useCartContext } from '../../contexts/CartContext';
import CardItem from '../CartItem';

import './index.css';

const { format } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const CartSection = () => {
  const { cart } = useCartContext();

  const cartTotal = cart.reduce((accumulator, current) => {
    return (accumulator +=
      current.quantity * (current.price || current.modifier?.price || 0));
  }, 0);

  return (
    <div className='cart_section_container'>
      <div className='cart_section_header'>
        <h4 className='cart_section_title'>Carrinho</h4>
      </div>

      <div className='cart_section_content'>
        {cart.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>

      <p>{format(cartTotal)}</p>
    </div>
  );
};

export default CartSection;
