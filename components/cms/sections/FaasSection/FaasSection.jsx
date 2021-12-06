import { Children } from 'react';
// const DynamicRenderSlice = dynamic(() => import('components/cms/RenderSlice'), {
//   loading: () => <></>,
// });
import RenderSlice from 'components/cms/RenderSlice';

const FaasSection = ({ faasPage }) => {
  return (
    <>
      {Children.toArray(
        faasPage.body.map((slice) => (
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

export default FaasSection;
