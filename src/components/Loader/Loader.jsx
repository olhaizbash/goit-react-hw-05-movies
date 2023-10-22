import { Vortex } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass={css.blockswrapper}
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
  );
};
