import HomeKeyVisual from 'components/cms/HomeKeyVisual';
import HomeSection from 'components/cms/sections/HomeSection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import {
  fetchCampaignData,
  fetchHomepageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO, PATHS } from 'config/navigation';

const Home = ({ campaign, homepage, seo, content }) => {
  return (
    <>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <HomeKeyVisual campaign={campaign} />
        <HomeSection homepage={homepage} />
      </BaseLayout>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const language = REGION_INFO[params.region].language;
  const campaignData = await fetchCampaignData(language);
  const homepageData = await fetchHomepageData(language);
  const contentData = await fetchHeaderFooterData(language);
  const seoData = await fetchSeoData(language);
  const homeSeo = seoData.list.find((item) => item.component_key === 'HOME');
  return {
    props: {
      campaign: campaignData,
      homepage: homepageData,
      seo: homeSeo,
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

export default Home;
