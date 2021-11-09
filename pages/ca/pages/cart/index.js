import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import CartPage from 'components/cms/CartPage';
import { wrapper } from 'redux/configureStore';
import { updateRegion } from 'redux/features/region/regionSlice';
import {
  fetchCampaignData,
  fetchCartPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO } from 'config/navigation';

const Cart = ({ campaign, seo, content, cartPage }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <CartPage cartPage={cartPage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const campaignData = await fetchCampaignData('en-ca');
  const contentData = await fetchHeaderFooterData('en-ca');
  const cartPageData = await fetchCartPageData('en-ca');
  const seoData = await fetchSeoData('en-ca');
  const cartSeo = seoData.list.find((item) => item.component_key === 'CART');
  store.dispatch(updateRegion(REGION_INFO.CA));
  return {
    props: {
      campaign: campaignData,
      seo: cartSeo,
      content: contentData,
      cartPage: cartPageData,
    },
    revalidate: REVALIDATE_TIME,
  };
});

export default Cart;
