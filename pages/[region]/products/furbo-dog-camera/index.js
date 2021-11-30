import ProductKeyVisual from 'components/cms/ProductKeyVisual';
import ProductSection from 'components/cms/sections/ProductSection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import {
  fetchCampaignData,
  fetchProductPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import Error from 'pages/404';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO, PATHS } from 'config/navigation';

const Product = ({ campaign, productPage, seo, content }) => {
  return (
    <>
      {content.enable_product && (
        <div style={{ backgroundColor: 'white' }}>
          <SeoManager seo={seo} />
          <BaseLayout campaign={campaign} content={content}>
            <ProductKeyVisual productPage={productPage} />
            <ProductSection productPage={productPage} />
          </BaseLayout>
        </div>
      )}
      {!content.enable_product && (
        <Error campaign={campaign} content={content} />
      )}
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const code = params.region.toUpperCase();
  const language = REGION_INFO[code].language;
  const contentData = await fetchHeaderFooterData(language);
  const campaignData = await fetchCampaignData(language);
  if (contentData.enable_product !== true) {
    return {
      props: {
        campaign: campaignData,
        content: contentData,
      },
      revalidate: REVALIDATE_TIME,
    };
  }
  const productPageData = await fetchProductPageData(language);
  const seoData = await fetchSeoData(language);
  const ProductSeo = seoData.list.find(
    (item) => item.component_key === 'PRODUCTS',
  );
  return {
    props: {
      campaign: campaignData,
      productPage: productPageData,
      seo: ProductSeo,
      content: contentData,
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

export default Product;
