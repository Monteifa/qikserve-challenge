import { createContext, ReactNode, useContext, useState } from 'react';
import { ItemsModifiers } from '../types/menu.types';

export interface Order {
  id: number;
  name: string;
  price: number;
  modifier?: ItemsModifiers;
  quantity: number;
}

interface CartContextProps {
  cart: Array<Order>;
  updateCart: (order: Order) => void;
  addToCart: (order: Order) => void;
}

const CartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Array<Order>>([]);

  const updateCart = (order: Order) => {
    const newCart = [...cart];

    if (order.quantity === 0) {
      const updated = cart.filter((item) =>
        order.modifier
          ? item.modifier?.id !== order.modifier?.id
          : item.id !== order.id
      );

      setCart(updated);
      return;
    }

    const index = cart?.findIndex((cart) =>
      order.modifier
        ? cart.modifier?.id === order.modifier.id
        : cart.id === order.id
    );

    newCart[index] = {
      ...newCart[index],
      ...order,
    };

    setCart(newCart);

    return;
  };

  const addToCart = (order: Order) => {
    const newCart = [...cart];

    const index = cart?.findIndex((cart) => cart.id === order.id);

    if (index === -1) {
      setCart((cart: Array<Order>) => [...cart, order]);
      return;
    }

    if (order.modifier) {
      if (newCart[index].modifier?.id === order.modifier.id) {
        newCart[index] = {
          ...newCart[index],
          ...order,
          quantity: newCart[index].quantity + order.quantity,
        };
        setCart(newCart);
        return;
      } else {
        setCart((cart: Array<Order>) => [...cart, order]);
        return;
      }
    } else {
      newCart[index] = {
        ...newCart[index],
        ...order,
      };

      setCart(newCart);

      return;
    }
  };

  return (
    <CartContext.Provider value={{ cart, updateCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
