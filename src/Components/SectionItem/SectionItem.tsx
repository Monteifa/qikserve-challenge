import { useDataContext } from '../../contexts/DataContext';

import './SectionItem.css';

interface SectionItemsProps {
  id: number;
  name: string;
  img: string;
}

const SectionItem = ({ name, img }: SectionItemsProps) => {
  const { restaurant } = useDataContext();

  return (
    <div
      className='section_item_container'
      style={{
        borderBottom: `2px solid ${restaurant?.webSettings.primaryColour}`,
      }}
    >
      <div className='sectio_item_circle'>
        <img
          className='section_item_img'
          src={img}
          height={68}
          width={68}
          alt='drinks'
        />
      </div>

      <p>{name}</p>
    </div>
  );
};

export { SectionItem };
