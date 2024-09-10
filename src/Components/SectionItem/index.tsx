import './index.css';

interface SectionItemsProps {
  name: string;
  img: string;
}

const SectionItem = ({ name, img }: SectionItemsProps) => {
  return (
    <div className='teste'>
      <div className='circle'>
        <img
          className='img-teste'
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
