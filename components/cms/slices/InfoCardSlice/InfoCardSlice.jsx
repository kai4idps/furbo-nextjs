import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { makeStyles } from '@material-ui/core/styles';
import VideoButton from 'components/cms/elements/VideoButton';
import ShopButton from 'components/cms/elements/ShopButton';
import LearnButton from 'components/cms/elements/LearnButton';
import SignInButton from 'components/cms/elements/SignInButton';

import styles from './infoCardSliceStyle';

const useStyles = makeStyles(styles);

const renderSlice = (slice) => {
  if (slice.type === 'video_button') {
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
  } else if (slice.type === 'shop_button') {
    return (
      <ShopButton
        shopButtonText={slice.data.shop_button_text}
        center={slice.data.center}
      />
    );
  } else if (slice.type === 'learn_button') {
    return (
      <LearnButton
        color={slice.data.color}
        learnButtonText={slice.data.learn_button_text}
        link={slice.data.link}
      />
    );
  } else if (slice.type === 'sign_in_button') {
    return (
      <SignInButton
        signInButtonText={slice.data.sign_in_button_text}
        center={slice.data.center}
      />
    );
  } else {
    return null;
  }
};

const InfoCard = (props) => {
  const classes = useStyles();
  const { title, titleUnderline, subtitle, content, backgroundColor } = props;
  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div
        className={classes.title}
        style={{
          textDecorationLine: titleUnderline ? 'underline' : 'none',
          textDecorationColor: titleUnderline ? '#f7cd3d' : 'none',
          textDecorationThickness: titleUnderline ? '4px' : 'none',
          textUnderlineOffset: titleUnderline ? '5px' : 'none',
          textDecorationSkip: false,
        }}
      >
        {RichText.render(title)}
      </div>
      <div className={classes.subtitle}>{RichText.render(subtitle)}</div>
      {React.Children.toArray(
        content.map((slice) => renderSlice(slice.content)),
      )}
    </div>
  );
};

export default InfoCard;

InfoCard.propTypes = {
  title: PropTypes.array,
  titleUnderline: PropTypes.bool,
  subtitle: PropTypes.array,
  content: PropTypes.array,
  backgroundColor: PropTypes.string,
};
