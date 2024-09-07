import { createContext, ReactNode, useContext, useState } from 'react';

const CartContext = createContext({});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState();

  return <CartContext.Provider value={}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
