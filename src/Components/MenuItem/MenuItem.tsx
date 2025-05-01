import Badge from '../Badge';

import { useCartContext } from '../../contexts/CartContext';

import { Items } from '../../types/menu.types';
import { CurrencyFormatter } from '../../utils/formatCurrency';

import LazyImage from '../LazyImage';

import './MenuItem.css';

const MenuItem = ({
  item,
  setSelected,
}: {
  item: Items;
  setSelected: (item: Items) => void;
}) => {
  const { cart } = useCartContext();

  const qty = cart.find((itemCart) => itemCart.id === item.id)?.quantity;

  return (
    <div className='menu_item_container' onClick={() => setSelected(item)}>
      <div className=''>
        <p className='menu_item_title'>
          {qty && <Badge>{qty}</Badge>}
          {item.name}
        </p>
        <p className='menu_item_description'>{item.description}</p>
        <p className='menu_item_price'>
          {CurrencyFormatter().formatter(item.price)}
        </p>
      </div>

      <LazyImage src={item?.images?.[0]?.image} />
    </div>
  );
};

export { MenuItem };
