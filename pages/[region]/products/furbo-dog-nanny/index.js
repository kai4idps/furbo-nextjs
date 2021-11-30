import FurboDogNannySection from 'components/cms/sections/FurboDogNannySection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import {
  fetchCampaignData,
  fetchFdnPageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import Error from 'pages/404';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO, PATHS } from 'config/navigation';

const FurboDogNanny = ({ campaign, fdnPage, seo, content }) => {
  return (
    <>
      {content.enable_furbo_dog_nanny && (
        <div style={{ backgroundColor: 'white' }}>
          <SeoManager seo={seo} />
          <BaseLayout campaign={campaign} content={content}>
            <FurboDogNannySection fdnPage={fdnPage} />
          </BaseLayout>
        </div>
      )}
      {!content.enable_furbo_dog_nanny && (
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
  if (contentData.enable_furbo_dog_nanny !== true) {
    return {
      props: {
        campaign: campaignData,
        content: contentData,
      },
      revalidate: REVALIDATE_TIME,
    };
  }
  const fdnPageData = await fetchFdnPageData(language);
  const seoData = await fetchSeoData(language);
  const FdnSeo = seoData.list.find(
    (item) => item.component_key === 'FURBO_DOG_NANNY',
  );
  return {
    props: {
      campaign: campaignData,
      fdnPage: fdnPageData,
      seo: FdnSeo,
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

export default FurboDogNanny;
