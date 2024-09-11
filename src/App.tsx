import { useEffect, useState } from 'react';

import Button from './Components/Button';
import CartSection from './Components/CartSection';
import Header from './Components/Header';
import MenuSection from './Components/MenuSection';
import Loader from './Components/Loaders';

import { useCartContext } from './contexts/CartContext';
import { useDataContext } from './contexts/DataContext';

import { CurrencyFormatter } from './utils/formatCurrency';

import './index.css';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const { restaurant, setRestaurant, setMenu, loading, setLoading } =
    useDataContext();

  const { cart } = useCartContext();

  const cartTotalQuantity = cart.reduce((accumulator, current) => {
    return (accumulator += current.quantity);
  }, 0);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 2000));

      const promises: Promise<Response>[] = [
        fetch(
          'https://api.allorigins.win/get?url=https://cdn-dev.preoday.com/challenge/venue/9'
        ),
        fetch(
          'https://api.allorigins.win/get?url=https://cdn-dev.preoday.com/challenge/menu'
        ),
      ];

      try {
        const responses = await Promise.all(promises);

        const [restaurantData, menuData] = await Promise.all(
          responses.map(async (response) => {
            const data = await response.json();
            return JSON.parse(data.contents);
          })
        );

        setRestaurant(restaurantData);
        setMenu(menuData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }

      if (restaurant)
        CurrencyFormatter().setLocale({
          language: restaurant?.locale,
          currency: restaurant?.ccy,
        });
    };

    getData();
  }, []);

  return (
    <>
      <Header />

      {loading ? (
        <Loader element='header' />
      ) : (
        <div
          className='img_header_container'
          style={{
            backgroundImage: `url(${restaurant?.webSettings.bannerImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}

      <div className='container'>
        <MenuSection />

        <CartSection cartOpen={cartOpen} setCartOpen={setCartOpen} />
      </div>

      <div className='allergy_container'>
        <div className='radius'>
          <p style={{ color: restaurant?.webSettings.primaryColour }}>
            View allergy information
          </p>
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
