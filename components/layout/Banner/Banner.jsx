import PropTypes from 'prop-types';
import BannerContent from './BannerContent';
import BannerCountdown from './BannerCountdown';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import { isEmpty } from 'src/helpers';

const Banner = ({ campaign }) => {
  const isContent = campaign.banner_type.includes('Content');
  const isCountdown = campaign.banner_type.includes('Countdown');
  const router = useRouter();
  const { region } = router.query;

  if (isContent && isCountdown && !isEmpty(region)) {
    return (
      <Carousel
        swipeable={true}
        showThumbs={false}
        showArrows={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        transitionTime={500}
      >
        <BannerContent campaign={campaign} />
        <BannerCountdown campaign={campaign} />
      </Carousel>
    );
  } else if (isContent) {
    return (
      <Carousel
        swipeable={false}
        showThumbs={false}
        showArrows={false}
        infiniteLoop={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={false}
        transitionTime={0}
      >
        <BannerContent campaign={campaign} />
      </Carousel>
    );
  } else {
    return (
      <Carousel
        swipeable={true}
        showThumbs={false}
        showArrows={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        transitionTime={500}
      >
        <BannerCountdown campaign={campaign} />
      </Carousel>
    );
  }
};

Banner.propTypes = {
  campaign: PropTypes.object,
};

export default Banner;
