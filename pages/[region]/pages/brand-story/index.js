import BaseLayout from 'components/layout/BaseLayout';
import BrandStoryPage from 'components/cms/BrandStoryPage';
import SeoManager from 'components/SeoManager';
import {
  fetchCampaignData,
  fetchBrandStoryPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO, PATHS } from 'config/navigation';

const BrandStory = ({ campaign, seo, content, brandStoryPage }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <BrandStoryPage brandStoryPage={brandStoryPage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const code = params.region.toUpperCase();
  const language = REGION_INFO[code].language;
  const campaignData = await fetchCampaignData(language);
  const contentData = await fetchHeaderFooterData(language);
  const brandStoryPageData = await fetchBrandStoryPageData(language);
  const seoData = await fetchSeoData(language);
  const dfdSeo = seoData.list.find(
    (item) => item.component_key === 'BRAND_STORY',
  );
  return {
    props: {
      campaign: campaignData,
      seo: dfdSeo,
      content: contentData,
      brandStoryPage: brandStoryPageData,
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

export default BrandStory;
