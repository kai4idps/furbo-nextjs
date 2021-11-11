import HomeKeyVisual from 'components/cms/HomeKeyVisual';
// import HomeSection from 'components/cms/sections/HomeSection';
import BaseLayout from 'components/layout/BaseLayout';
import SeoManager from 'components/SeoManager';
import { wrapper } from 'redux/configureStore';
import { updateRegion } from 'redux/features/region/regionSlice';
import dynamic from 'next/dynamic';
import {
  fetchCampaignData,
  fetchHomepageData,
  fetchSeoData,
  fetchHeaderFooterData,
} from 'src/prismicData';
import { REVALIDATE_TIME } from 'config/common';
import { REGION_INFO } from 'config/navigation';

const Home = ({ campaign, homepage, seo, content }) => {
  const HomeSection = dynamic(() =>
    import('components/cms/sections/HomeSection'),
  );
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SeoManager seo={seo} />
      <BaseLayout campaign={campaign} content={content}>
        <HomeKeyVisual campaign={campaign} />
        <HomeSection homepage={homepage} />
      </BaseLayout>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const campaignData = await fetchCampaignData('en-ca');
  const homepageData = await fetchHomepageData('en-ca');
  const contentData = await fetchHeaderFooterData('en-ca');
  const seoData = await fetchSeoData('en-ca');
  const homeSeo = seoData.list.find((item) => item.component_key === 'HOME');
  store.dispatch(updateRegion(REGION_INFO.CA));
  return {
    props: {
      campaign: campaignData,
      homepage: homepageData,
      seo: homeSeo,
      content: contentData,
    },
    revalidate: REVALIDATE_TIME,
  };
});

export default Home;
