import { useState } from 'react';
import { useDataContext } from '../../contexts/DataContext';

const LazyImage = ({ src }: { src: string | undefined }) => {
  const { loading } = useDataContext();
  const [error, setError] = useState(false);

  return (
    <div>
      {loading && !src && <p>Loading...</p>}

      {!loading && error && <p>Error loading image</p>}

      {!loading && src && (
        <img
          src={error ? '' : src}
          loading='lazy'
          alt='Image menu item'
          width={128}
          height={85}
          onError={() => setError(true)}
          className='menu_item_img'
        />
      )}
    </div>
  );
};

export { LazyImage };
