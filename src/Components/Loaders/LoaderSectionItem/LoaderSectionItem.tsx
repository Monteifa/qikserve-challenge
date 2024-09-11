import { Loader } from '../Loader';

import './LoaderSectionItem.css';

const LoaderSectionItem = () => {
  return (
    <div className='loader_section_item'>
      <Loader element='circle' />
      <Loader element='text' />
    </div>
  );
};

export { LoaderSectionItem };
