import PropTypes from 'prop-types';
import CustomButton from 'components/cms/elements/CustomButton';
import EmailInput from 'components/cms/elements/EmailInput';
import GridElement from 'components/cms/elements/GridElement';
import LearnButton from 'components/cms/elements/LearnButton';
// import ProductButton from 'components/cms/elements/ProductButton';
import ShopButton from 'components/cms/elements/ShopButton';
import SignInButton from 'components/cms/elements/SignInButton';
import TextBox from 'components/cms/elements/TextBox';
import VideoButton from 'components/cms/elements/VideoButton';
// import { useRouter } from 'next/router';
import { isEmpty } from 'src/helpers';

const RenderElement = ({ type, data }) => {
  // const region = useRouter().query.region;
  if (isEmpty(type) || isEmpty(data)) {
    return null;
  }
  switch (type) {
    case 'custom_button':
      return (
        <CustomButton
          color={data.color}
          text={data.text}
          link={data.link}
          center={data.center}
        />
      );
    case 'email_input':
      return <EmailInput placeholder={data.placeholder} action={data.action} />;
    case 'grid_element':
      return (
        <GridElement gridContent={data.content} imageSize={data.image_size} />
      );
    case 'learn_button':
      return (
        <LearnButton
          color={data.color}
          learnButtonText={data.learn_button_text}
          link={data.link}
        />
      );
    case 'product_button':
      return (
        <></>
        // <ProductButton
        //   productInfo={data[`product_info_${region}`]}
        //   productName={data.product_name}
        //   productType={data.product_type}
        //   productText={data.product_text}
        //   buttonText={data.button_text}
        // />
      );
    case 'shop_button':
      return (
        <ShopButton
          shopButtonText={data.shop_button_text}
          center={data.center}
        />
      );
    case 'sign_in_button':
      return (
        <SignInButton
          signInButtonText={data.sign_in_button_text}
          center={data.center}
        />
      );
    case 'text_box':
      return (
        <TextBox
          icon={data.icon}
          text={data.text}
          backgroundColor={data.background_color}
        />
      );
    case 'video_button':
      return (
        <VideoButton
          embedVideoLink={`${data.video_link.embed_url.replace(
            'watch?v=',
            'embed/',
          )}?enablejsapi=1`}
          watchVideoText={data.watch_video_text}
          center={data.center}
          textColor={data.text_color}
        />
      );
    default:
      return null;
  }
};

RenderElement.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
};

export default RenderElement;
