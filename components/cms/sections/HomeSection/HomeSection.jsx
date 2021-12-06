import { Children } from 'react';
import RenderSlice from 'components/cms/RenderSlice';

const HomeSection = ({ homepage }) => {
  return (
    <>
      {Children.toArray(
        homepage.map((slice) => (
          <RenderSlice
            type={slice.slice_type}
            primary={slice.primary}
            items={slice.items}
          />
        )),
      )}
    </>
  );
};

export default HomeSection;
