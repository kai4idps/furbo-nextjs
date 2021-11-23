import DesignedForDogsSection from 'components/cms/sections/DesignedForDogsSection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import {
  fetchCampaignData,
  fetchDfdPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO, PATHS } from 'config/navigation';

const DesignedForDogs = ({ campaign, dfdPage, seo, content }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <DesignedForDogsSection dfdPage={dfdPage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const code = params.region.toUpperCase();
  const language = REGION_INFO[code].language;
  const contentData = await fetchHeaderFooterData(language);
  if (contentData.enable_designed_for_dogs !== true) {
    return {
      notFound: true,
    };
  }
  const campaignData = await fetchCampaignData(language);
  const dfdPageData = await fetchDfdPageData(language);
  const seoData = await fetchSeoData(language);
  const dfdSeo = seoData.list.find(
    (item) => item.component_key === 'DESIGNED_FOR_DOGS',
  );
  return {
    props: {
      campaign: campaignData,
      dfdPage: dfdPageData,
      seo: dfdSeo,
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

export default DesignedForDogs;
