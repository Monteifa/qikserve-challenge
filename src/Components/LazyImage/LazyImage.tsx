import { useDataContext } from '../../contexts/DataContext';

const LazyImage = ({ src }: { src: string | undefined }) => {
  const { loading } = useDataContext();

  return (
    <div>
      {loading && !src && <p>Loading...</p>}

      {!loading && !src && <p>Error loading image</p>}

      {!loading && src && (
        <img
          src={src}
          loading='lazy'
          alt='Image menu item'
          width={128}
          height={85}
          className='menu_item_img'
        />
      )}
    </div>
  );
};

export { LazyImage };
