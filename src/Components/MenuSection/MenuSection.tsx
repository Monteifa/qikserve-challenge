import { useDeferredValue, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { useDataContext } from '../../contexts/DataContext';

import { Items } from '../../types/menu.types';

import Accordion from '../Accordion';
import MenuItem from '../MenuItem';
import Modal from '../Modal';
import SectionItem from '../SectionItem';

import './MenuSection.css';

const MenuSection = () => {
  const [selectedItem, setSelectedItem] = useState<Items>();
  const [search, setSearch] = useState('');

  const deferredQuery = useDeferredValue(search);

  const { menu } = useDataContext();

  const filteredSections = menu?.sections.filter((section) =>
    section.items.some((item) =>
      item.name.toLowerCase().includes(deferredQuery.toLowerCase())
    )
  );

  const filteredItems = filteredSections?.flatMap(({ items }) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(deferredQuery.toLowerCase())
    )
  );

  return (
    <>
      <div className='search_bar_container'>
        <div className='search_bar'>
          <AiOutlineSearch width={24} height={24} />

          <input
            type='text'
            placeholder='Search menu items'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className='menu-container'>
        <div className='section-container'>
          {filteredSections?.map((section) => (
            <SectionItem
              key={section.id}
              id={section.id}
              name={section.name}
              img={section.images[0].image}
            />
          ))}
        </div>

        {filteredSections?.map((section) => (
          <Accordion key={section.id} title={section.name} id={section.id}>
            {section.items?.map(
              (item) =>
                filteredItems?.includes(item) && (
                  <MenuItem
                    key={item?.id}
                    item={item}
                    setSelected={setSelectedItem}
                  />
                )
            )}
          </Accordion>
        ))}
      </div>

      {selectedItem && (
        <Modal item={selectedItem} setSelected={setSelectedItem} />
      )}
    </>
  );
};

export default MenuSection;
