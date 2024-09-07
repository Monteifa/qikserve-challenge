import { useCartContext } from '../../contexts/CartContext';
import { ItemsProps } from '../../types/menu.types';

import Badge from '../Badge';

import './index.css';

const { format } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
const MenuItem = ({
  item,
  setSelected,
}: {
  item: ItemsProps;
  setSelected: (item: ItemsProps) => void;
}) => {
  const { cart } = useCartContext();

  const qty = cart.find((itemCart) => itemCart.id === item.id)?.quantity;

  return (
    <div className='menu-item-container' onClick={() => setSelected(item)}>
      <div className=''>
        <p className='menu_item_title'>
          {qty && <Badge>{qty}</Badge>}
          {item.name}
        </p>
        <p className='menu_item_description'>{item.description}</p>
        <p className='menu_item_price'>{format(item.price)}</p>
      </div>

      {item.images && (
        <img
          src={item.images && item.images[0].image}
          width={128}
          height={85}
          alt=''
          className='menu_item_img'
        />
      )}
    </div>
  );
};

export default MenuItem;
