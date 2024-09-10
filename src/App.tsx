import { useEffect, useState } from 'react';

import MenuItem from './Components/MenuItem';
import Header from './Components/Header';
import SectionItem from './Components/SectionItem';
import Modal from './Components/Modal';
import Accordion from './Components/Accordion';
import CartSection from './Components/CartSection';

import { AiOutlineSearch } from 'react-icons/ai';

import { useDataContext } from './contexts/DataContext';

import { MenuMock, RestaurantMock } from './consts/index';
import { Restaurant } from './types/restaurant.types';
import { Items, Menu } from './types/menu.types';

import './index.css';
import Button from './Components/Button';
import { useCartContext } from './contexts/CartContext';

function App() {
  const [selectedItem, setSelectedItem] = useState<Items>();
  const [cartOpen, setCartOpen] = useState(false);

  const { restaurant, setRestaurant, menu, setMenu } = useDataContext();

  const { cart } = useCartContext();

  // const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await new Promise((res) => setTimeout(res, 2000));
      setRestaurant(RestaurantMock as unknown as Restaurant);

      setMenu(MenuMock as unknown as Menu);
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

  // const handleSearch = (value: any) => {
  //   const array = menu?.sections.filter((section) =>
  //     section.items.filter((item) => item.name === value)
  //   );

  //   setFiltered(array);
  // };

  return (
    <>
      <Header />
      <img
        className='img-header'
        src={restaurant?.webSettings.bannerImage}
        alt='banner'
      />
      <div className='search_bar_container'>
        <div className='search_bar'>
          <AiOutlineSearch width={24} height={24} />

          <input type='text' placeholder='Search menu items' />
        </div>
      </div>
      <div className='container'>
        <div className='menu-container'>
          <div className='section-container'>
            {menu?.sections?.map((section) => {
              return (
                <SectionItem
                  key={section.id}
                  name={section.name}
                  img={section.images[0].image}
                />
              );
            })}
          </div>

          {menu?.sections.map((section) => (
            <Accordion key={section.id} title={section.name}>
              {section.items?.map((item) => (
                <MenuItem
                  key={item?.id}
                  item={item}
                  setSelected={setSelectedItem}
                />
              ))}
            </Accordion>
          ))}
        </div>

        <CartSection cartOpen={cartOpen} setCartOpen={setCartOpen} />

        <div className='mobile_btn_cart'>
          <Button
            text='Carrinho'
            secondText={`${cart.length} item(s)`}
            onClick={() => setCartOpen(!cartOpen)}
          />
        </div>
      </div>

      {selectedItem && (
        <Modal item={selectedItem} setSelected={setSelectedItem} />
      )}
    </>
  );
}

export default App;
