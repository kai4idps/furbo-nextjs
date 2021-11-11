import React from 'react';
import KeyVisualSlice from 'components/cms/slices/KeyVisualSlice';
import SmartAlertsSlice from 'components/cms/slices/SmartAlertsSlice';
import FeatureBlockSlice from 'components/cms/slices/FeatureBlockSlice';
import InfoCardSlice from 'components/cms/slices/InfoCardSlice';

const renderSlice = (slice) => {
  if (slice.slice_type === 'key_visual') {
    return (
      <KeyVisualSlice
        title={slice.primary.title}
        subtitle={slice.primary.subtitle}
        titleUnderline={slice.primary.title_underline}
        gridAlign={slice.primary.grid_align}
        textAlign={slice.primary.text_align}
        mobileGridHeight={slice.primary.mobile_grid_height}
        backgroundImageDesktop={slice.primary.background_image_desktop}
        backgroundImageMobile={slice.primary.background_image_mobile}
        bannerImageMobile={slice.primary.banner_image_mobile}
        content={slice.items}
      />
    );
  } else if (slice.slice_type === 'smart_alerts') {
    return (
      <SmartAlertsSlice
        title={slice.primary.title}
        titleIcon={slice.primary.title_icon}
        titleUnderline={slice.primary.title_underline}
        subtitle={slice.primary.subtitle}
        backgroundImageDesktop={slice.primary.background_image_desktop}
        backgroundImageMobile={slice.primary.background_image_mobile}
        content={slice.items}
        textContent={slice.primary.text_content}
      />
    );
  } else if (slice.slice_type === 'feature_block') {
    return (
      <FeatureBlockSlice
        title={slice.primary.title}
        titleIcon={slice.primary.title_icon}
        titleUnderline={slice.primary.title_underline}
        subtitle={slice.primary.subtitle}
        subtitleUnderline={slice.primary.subtitle_underline}
        textContent={slice.primary.text_content}
        gridAlign={slice.primary.grid_align}
        mediaContentDesktop={slice.primary.media_content_desktop}
        mediaContentMobile={slice.primary.media_content_mobile}
        mediaContentCenter={slice.primary.media_content_center}
        content={slice.items}
      />
    );
  } else if (slice.slice_type === 'info_card') {
    return (
      <InfoCardSlice
        title={slice.primary.title}
        titleUnderline={slice.primary.title_underline}
        subtitle={slice.primary.subtitle}
        backgroundColor={slice.primary.background_color}
        content={slice.items}
      />
    );
  }
  return null;
};

const FurboDogNannySection = ({ fdnPage }) => {
  return (
    <>
      {React.Children.toArray(fdnPage.body.map((slice) => renderSlice(slice)))}
    </>
  );
};

export default FurboDogNannySection;
