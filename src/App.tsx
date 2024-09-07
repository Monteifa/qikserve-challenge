import { useEffect, useState } from 'react';

import MenuItem from './Components/MenuItem';
import Header from './Components/Header';
import SectionItem from './Components/SectionItem';
import Modal from './Components/Modal';
import Accordion from './Components/Accordion';

// import headerImg from './assets/header.png';

import { FaBars } from 'react-icons/fa6';

import { useDataContext } from './contexts/DataContext';

import './index.css';

import { MenuMock, RestaurantMock } from './consts/index';
import CartSection from './Components/CartSection';
import { RestaurantProps } from './types/restaurant.types';
import { ItemsProps, MenuProps } from './types/menu.types';

function App() {
  // const [dataRestaurant, setDataRestaurant] = useState();
  // const [dataMenu, setDataMenu] = useState();

  const [selectedItem, setSelectedItem] = useState<ItemsProps>();

  const { restaurant, setRestaurant, menu, setMenu } = useDataContext();

  useEffect(() => {
    const getData = async () => {
      await new Promise((res) => setTimeout(res, 2000));
      setRestaurant(RestaurantMock as unknown as RestaurantProps);

      setMenu(MenuMock as unknown as MenuProps);
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
      <div className='search_bar_container'>
        <div className='search_bar'>
          <FaBars width={24} height={24} />

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

        <CartSection />
      </div>

      {selectedItem && (
        <Modal item={selectedItem} setSelected={setSelectedItem} />
      )}
    </>
  );
}

export default App;
