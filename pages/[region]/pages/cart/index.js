import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import CartPage from 'components/cms/CartPage';
import {
  fetchCampaignData,
  fetchCartPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO, PATHS } from 'config/navigation';

const Cart = ({ campaign, seo, content, cartPage }) => {
  return (
    <>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <CartPage cartPage={cartPage} />
      </BaseLayout>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const language = REGION_INFO[params.region].language;
  const campaignData = await fetchCampaignData(language);
  const contentData = await fetchHeaderFooterData(language);
  const cartPageData = await fetchCartPageData(language);
  const seoData = await fetchSeoData(language);
  const cartSeo = seoData.list.find((item) => item.component_key === 'CART');

  return {
    props: {
      campaign: campaignData,
      seo: cartSeo,
      content: contentData,
      cartPage: cartPageData,
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

export default Cart;
