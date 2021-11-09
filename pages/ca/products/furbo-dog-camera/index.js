import ProductKeyVisual from 'components/cms/ProductKeyVisual';
import ProductSection from 'components/cms/sections/ProductSection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import { wrapper } from 'redux/configureStore';
import { updateRegion } from 'redux/features/region/regionSlice';
import {
  fetchCampaignData,
  fetchProductPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO } from 'config/navigation';

const Product = ({ campaign, productPage, seo, content }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <ProductKeyVisual productPage={productPage} />
        <ProductSection productPage={productPage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const campaignData = await fetchCampaignData('en-ca');
  const productPageData = await fetchProductPageData('en-ca');
  const contentData = await fetchHeaderFooterData('en-ca');
  const seoData = await fetchSeoData('en-ca');
  const ProductSeo = seoData.list.find(
    (item) => item.component_key === 'PRODUCTS',
  );
  store.dispatch(updateRegion(REGION_INFO.CA));
  return {
    props: {
      campaign: campaignData,
      productPage: productPageData,
      seo: ProductSeo,
      content: contentData,
    },
    revalidate: REVALIDATE_TIME,
  };
});

export default Product;
