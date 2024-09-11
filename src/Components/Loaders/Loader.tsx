import './Loader.css';

interface LoaderProps {
  element: 'img' | 'header' | 'title' | 'circle' | 'text' | 'menu';
}

const Loader = ({ element }: LoaderProps) => {
  return (
    <div className={`loader_container`}>
      <div className={`${element}`}></div>
      <div className='loader_animation_wrapper'>
        <div className='loader_animation'></div>
      </div>
    </div>
  );
};

export { Loader };
