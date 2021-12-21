import BaseLayout from 'components/layout/BaseLayout';
import OrderStatusPage from 'components/cms/OrderStatusPage';
import SeoManager from 'components/SeoManager';
import {
  fetchCampaignData,
  fetchOrderStatusPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO, PATHS } from 'config/navigation';

const OrderStatus = ({ campaign, seo, content, orderStatusPage }) => {
  return (
    <>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <OrderStatusPage orderStatusPage={orderStatusPage} />
      </BaseLayout>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const language = REGION_INFO[params.region].language;
  const campaignData = await fetchCampaignData(language);
  const orderStatusPageData = await fetchOrderStatusPageData(language);
  const contentData = await fetchHeaderFooterData(language);
  const seoData = await fetchSeoData(language);
  const orderStatusSeo = seoData.list.find(
    (item) => item.component_key === 'ORDER_STATUS',
  );
  return {
    props: {
      campaign: campaignData,
      seo: orderStatusSeo,
      content: contentData,
      orderStatusPage: orderStatusPageData,
    },
    revalidate: REVALIDATE_TIME,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: PATHS,
    fallback: false,
  };
};

export default OrderStatus;
