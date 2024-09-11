import { useEffect, useState } from 'react';

import Button from './Components/Button';
import CartSection from './Components/CartSection';
import Header from './Components/Header';
import MenuSection from './Components/MenuSection/MenuSection';

import { MenuMock, RestaurantMock } from './consts/index';
import { useCartContext } from './contexts/CartContext';
import { useDataContext } from './contexts/DataContext';

import { Menu } from './types/menu.types';
import { Restaurant } from './types/restaurant.types';
import { CurrencyFormatter } from './utils/formatCurrency';

import './index.css';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const { restaurant, setRestaurant, setMenu } = useDataContext();

  const { cart } = useCartContext();

  const cartTotalQuantity = cart.reduce((accumulator, current) => {
    return (accumulator += current.quantity);
  }, 0);

  useEffect(() => {
    const getData = async () => {
      await new Promise((res) => setTimeout(res, 2000));
      setRestaurant(RestaurantMock as unknown as Restaurant);

      setMenu(MenuMock as unknown as Menu);

      CurrencyFormatter().setLocale({
        language: RestaurantMock.locale,
        currency: RestaurantMock.ccy,
      });
      // const promises: Promise<Response>[] = [
      //   fetch(
      //     'https://api.allorigins.win/get?url=https://cdn-dev.preoday.com/challenge/venue/9'
      //   ),
      //   fetch(
      //     'https://api.allorigins.win/get?url=https://cdn-dev.preoday.com/challenge/menu'
      //   ),
      // ];

      // try {
      //   const responses = await Promise.all(promises);

      //   const [restaurantData, menuData] = await Promise.all(
      //     responses.map(async (response) => {
      //       const teste = await response.json();
      //       return JSON.parse(teste.contents);
      //     })
      //   );

      //   setRestaurant(restaurantData);
      //   setMenu(menuData);
      // } catch (error) {
      //   console.error('Error fetching data:', error);
      //   throw error;
      // }
    };

    getData();
  }, []);

  return (
    <>
      <Header />
      <img
        className='img-header'
        src={restaurant?.webSettings.bannerImage}
        alt='banner'
      />

      <div className='container'>
        <MenuSection />

        <CartSection cartOpen={cartOpen} setCartOpen={setCartOpen} />
      </div>

      <div className='teste'>
        <div className='radius'>
          <p className=''>View allergy information</p>
        </div>
      </div>

      <div className='mobile_btn_cart'>
        <Button
          text='Carrinho'
          secondText={`${cartTotalQuantity} item(s)`}
          onClick={() => setCartOpen(!cartOpen)}
        />
      </div>
    </>
  );
}

export default App;
