import { createContext, ReactNode, useContext, useState } from 'react';
import { ItemsModifiersProps } from '../types/menu.types';

export interface Order {
  id: number;
  name: string;
  price: number;
  modifier?: ItemsModifiersProps;
  quantity: number;
}

interface CartContextProps {
  cart: Array<Order>;
  updateCart: (order: Order, type?: 'add' | 'update') => void;
}

const CartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Array<Order>>([]);

  const updateCart = (order: Order, type?: 'add' | 'update') => {
    // pega ID
    const id = order.id;

    // ve se tem no array cart
    const index = cart?.findIndex((cart) => cart.id === id);
    if (index === -1) {
      // se nao tiver, add
      setCart((cart: Array<Order>) => [...cart, order]);
      return;
    }

    //se qty = 0 remove
    if (order.quantity === 0) {
      const updated = cart.filter((item) => item.id !== order.id);
      setCart(updated);
      return;
    }

    // se tiver, update
    const updated = [...cart];
    if (type === 'update') {
      // Cart:
      updated[index] = {
        ...updated[index],
        ...order,
      };
    } else {
      // Modal
      updated[index] = {
        ...updated[index],
        ...order,
        quantity: updated[index].quantity + order.quantity,
      };
    }

    setCart(updated);
  };

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
