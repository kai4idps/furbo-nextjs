import BaseLayout from 'components/layout/BaseLayout';
import OrderStatusPage from 'components/cms/OrderStatusPage';
import SeoManager from 'components/SeoManager';
import { wrapper } from 'redux/configureStore';
import { updateRegion } from 'redux/features/region/regionSlice';
import {
  fetchCampaignData,
  fetchOrderStatusPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO } from 'config/navigation';

const OrderStatus = ({ campaign, seo, content, orderStatusPage }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <OrderStatusPage orderStatusPage={orderStatusPage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const campaignData = await fetchCampaignData('en-ca');
  const orderStatusPageData = await fetchOrderStatusPageData('en-ca');
  const contentData = await fetchHeaderFooterData('en-ca');
  const seoData = await fetchSeoData('en-ca');
  const orderStatusSeo = seoData.list.find(
    (item) => item.component_key === 'ORDER_STATUS',
  );
  store.dispatch(updateRegion(REGION_INFO.CA));
  return {
    props: {
      campaign: campaignData,
      seo: orderStatusSeo,
      content: contentData,
      orderStatusPage: orderStatusPageData,
    },
    revalidate: REVALIDATE_TIME,
  };
});

export default OrderStatus;
