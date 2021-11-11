import CustomButton from 'components/cms/elements/CustomButton';
import GridElement from 'components/cms/elements/GridElement';
import LearnButton from 'components/cms/elements/LearnButton';
import ShopButton from 'components/cms/elements/ShopButton';
import SignInButton from 'components/cms/elements/SignInButton';
import VideoButton from 'components/cms/elements/VideoButton';

const RenderButtonSlice = (slice) => {
  switch (slice.type) {
    case 'custom_button':
      return (
        <CustomButton
          color={slice.data.color}
          text={slice.data.text}
          link={slice.data.link}
          center={slice.data.center}
        />
      );
    case 'shop_button':
      return (
        <ShopButton
          shopButtonText={slice.data.shop_button_text}
          center={slice.data.center}
        />
      );
    case 'sign_in_button':
      return (
        <SignInButton
          signInButtonText={slice.data.sign_in_button_text}
          center={slice.data.center}
        />
      );
    case 'grid_element':
      return <GridElement gridContent={slice.data.content} />;
    case 'learn_button':
      return (
        <LearnButton
          color={slice.data.color}
          learnButtonText={slice.data.learn_button_text}
          link={slice.data.link}
        />
      );
    case 'video_button':
      return (
        <VideoButton
          embedVideoLink={`${slice.data.video_link.embed_url.replace(
            'watch?v=',
            'embed/',
          )}?enablejsapi=1`}
          watchVideoText={slice.data.watch_video_text}
          center={slice.data.center}
          textColor={slice.data.text_color}
        />
      );
    default:
      return null;
  }
};

export default RenderButtonSlice;
