import { AiFillCloseCircle } from 'react-icons/ai';
import Button from '../Button';
import './index.css';
import { useState } from 'react';
import QuantityControler from '../CounterControl';
import { ItemsModifiersProps, ItemsProps } from '../../types/menu.types';
import { useCartContext } from '../../contexts/CartContext';

const { format } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

interface Order {
  id: number;
  name: string;
  price: number;
  modifier?: ItemsModifiersProps;
  quantity: number;
}

const Modal = ({
  item,
  setSelected,
}: {
  item: ItemsProps;
  setSelected: (item?: ItemsProps) => void;
}) => {
  const { updateCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [selectedModifier, setSelectedModifier] = useState(
    item?.modifiers?.[0].items?.[0]
  );

  const order: Order = {
    id: item?.id ?? -1,
    name: item?.name ?? '',
    price: quantity * (item?.price || selectedModifier?.price || 0),
    modifier: selectedModifier,
    quantity: quantity,
  };

  const updateQuantity = (qty: number) => {
    setQuantity(qty);
  };

  const updateModifier = (modifier: ItemsModifiersProps) => {
    setSelectedModifier(modifier);
  };

  const handleOrder = (order: Order) => {
    updateCart(order, 'add');
    setSelected(undefined);
  };

  return (
    <>
      <div className='modal-container'>
        <div className='modal-teste'>
          <div>
            <img src={item.images && item.images[0].image} alt='' />
          </div>

          <div className='item-info'>
            <h1>{item.name}</h1>

            <p>{item.description}</p>
          </div>

          {item.modifiers && (
            <>
              <div className='modifiers-header'>
                <h3>Choose your size</h3>
                <p>Select 1 option</p>
              </div>

              {item.modifiers.map((modifier) =>
                modifier.items.map((modifierItem) => (
                  <label
                    key={modifierItem.id}
                    htmlFor={`${modifierItem.id}`}
                    className='modifiers-items'
                  >
                    <div>
                      <p>{modifierItem.name}</p>
                      <p>{modifierItem.price}</p>
                    </div>

                    <input
                      type='radio'
                      name={`${modifier.id}`}
                      id={`${modifierItem.id}`}
                      onChange={() => updateModifier(modifierItem)}
                      checked={selectedModifier?.id === modifierItem.id}
                      value={modifier.id}
                    />
                  </label>
                ))
              )}
            </>
          )}

          <div className='controls-container'>
            <QuantityControler
              qty={order?.quantity ?? 0}
              setQuantity={updateQuantity}
            />

            <Button onClick={() => handleOrder(order)}>
              Add to Order {format(order?.price)}
            </Button>
          </div>

          <AiFillCloseCircle onClick={() => setSelected(undefined)} />
        </div>
      </div>
    </>
  );
};

export default Modal;
