import { useEffect, useState } from 'react';

import MenuItem from './Components/MenuItem';
import Header from './Components/Header';
import SectionItem from './Components/SectionItem';
import Modal from './Components/Modal';
import Accordion from './Components/Accordion';

import headerImg from './assets/header.png';

import { FaBars } from 'react-icons/fa6';

import { useDataContext } from './contexts/DataContext';

import './index.css';

import { Menu } from './consts/index';
import CartSection from './Components/CartSection';

function App() {
  // const [dataRestaurant, setDataRestaurant] = useState();
  // const [dataMenu, setDataMenu] = useState();

  const { sections, setSections } = useDataContext();

  useEffect(() => {
    const getData = async () => {
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

        const data = await Promise.all(
          responses.map(async (response) => {
            const teste = await response.json();
            return JSON.parse(teste.contents);
          })
        );

        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
      // setSections(Menu.sections);
    };

    getData();
  }, []);

  return (
    <>
      <Header />

      <img className='img-header' src={headerImg} alt='' />
      <div className='search_bar_container'>
        <div className='search_bar'>
          <FaBars width={24} height={24} />

          <input type='text' placeholder='Search menu items' />
        </div>
      </div>
      <div className='container'>
        <div className='menu-container'>
          <div className='section-container'>
            {sections.map((section) => {
              return (
                <SectionItem
                  key={section.id}
                  name={section.name}
                  img={section.images[0].image}
                />
              );
            })}
          </div>

          <Accordion title='Burgers'>
            {sections[0].items &&
              sections[0].items.map((sectionitem) => {
                return <MenuItem key={sectionitem?.id} {...sectionitem} />;
              })}
          </Accordion>

          <Accordion title='Drinks'>
            {sections[1].items &&
              sections[1].items.map((sectionitem) => {
                return <MenuItem key={sectionitem?.id} {...sectionitem} />;
              })}
          </Accordion>

          <Accordion title='Desserts'>
            {sections[2].items &&
              sections[2].items.map((sectionitem) => {
                return <MenuItem key={sectionitem?.id} {...sectionitem} />;
              })}
          </Accordion>
        </div>

        <CartSection />
      </div>

      <Modal />
    </>
  );
}

export default App;
