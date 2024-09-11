import { Loader } from '../Loader';

import './LoaderMenuItem.css';

const LoaderMenuItem = () => {
  return (
    <div className='menu_item_loader'>
      <div>
        <Loader element='title' />
        <Loader element='text' />
        <Loader element='text' />
        <Loader element='text' />
        <Loader element='title' />
      </div>
      {/* <div></div> */}
      <div>
        <Loader element='img' />
      </div>
    </div>
  );
};

export { LoaderMenuItem };
