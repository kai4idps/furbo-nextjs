import FurboForGoodSection from 'components/cms/sections/FurboForGoodSection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import {
  fetchCampaignData,
  fetchFfgPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO, PATHS } from 'config/navigation';

const FurboForGood = ({ campaign, ffgPage, seo, content }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <FurboForGoodSection ffgPage={ffgPage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const code = params.region.toUpperCase();
  const language = REGION_INFO[code].language;
  const contentData = await fetchHeaderFooterData(language);
  if (contentData.enable_furbo_for_good !== true) {
    return {
      notFound: true,
    };
  }
  const campaignData = await fetchCampaignData(language);
  const ffgPageData = await fetchFfgPageData(language);
  const seoData = await fetchSeoData(language);
  const ffgSeo = seoData.list.find(
    (item) => item.component_key === 'FURBO_FOR_GOOD',
  );
  return {
    props: {
      campaign: campaignData,
      ffgPage: ffgPageData,
      seo: ffgSeo,
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

export default FurboForGood;
