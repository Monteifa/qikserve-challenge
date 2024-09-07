import { createContext, ReactNode, useContext, useState } from 'react';

import { RestaurantProps } from '../types/restaurant.types';
import { MenuProps } from '../types/menu.types';

interface ContextProps {
  restaurant?: RestaurantProps;
  setRestaurant: (data: RestaurantProps) => void;
  menu?: MenuProps;
  setMenu: (data: MenuProps) => void;
}

const Context = createContext<ContextProps>({} as ContextProps);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [restaurant, setRestaurant] = useState<RestaurantProps>();
  const [menu, setMenu] = useState<MenuProps>();

  return (
    <Context.Provider value={{ restaurant, setRestaurant, menu, setMenu }}>
      {children}
    </Context.Provider>
  );
};

export const useDataContext = () => useContext(Context);
