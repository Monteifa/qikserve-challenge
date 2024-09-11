import './index.css';

interface SectionItemsProps {
  id: number;
  name: string;
  img: string;
}

const SectionItem = ({ name, img }: SectionItemsProps) => {
  return (
    <div className='section_item_container'>
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

export default SectionItem;
