import React from 'react';
import KeyVisualSlice from 'components/cms/slices/KeyVisualSlice';
import FeatureBlockSlice from 'components/cms/slices/FeatureBlockSlice';
import CardsCarouselSlice from 'components/cms/slices/CardsCarouselSlice';
import SplitLayoutSlice from 'components/cms/slices/SplitLayoutSlice';

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
  } else if (slice.slice_type === 'feature_block') {
    return (
      <FeatureBlockSlice
        title={slice.primary.title}
        titleIcon={slice.primary.title_icon}
        titleUnderline={slice.primary.title_underline}
        subtitle={slice.primary.subtitle}
        subtitleUnderline={slice.primary.subtitle_underline}
        gridAlign={slice.primary.grid_align}
        textContent={slice.primary.text_content}
        mediaContentDesktop={slice.primary.media_content_desktop}
        mediaContentMobile={slice.primary.media_content_mobile}
        mediaContentCenter={slice.primary.media_content_center}
        content={slice.items}
      />
    );
  } else if (slice.slice_type === 'cards_carousel') {
    return (
      <CardsCarouselSlice
        headingComponents={slice.primary.heading_components}
        title={slice.primary.title}
        subtitle={slice.primary.subtitle}
        titleUnderline={slice.primary.title_underline}
        titleArrow={slice.primary.title_arrow}
        backgroundColor={slice.primary.background_color}
        content={slice.items}
      />
    );
  } else if (slice.slice_type === 'split_layout') {
    return (
      <SplitLayoutSlice
        title={slice.primary.title}
        subtitle={slice.primary.subtitle}
        image={slice.primary.image}
        gridAlign={slice.primary.grid_align}
        content={slice.items}
      />
    );
  }
  return null;
};

const DesignedForDogsSection = ({ dfdPage }) => {
  return (
    <>
      {React.Children.toArray(dfdPage.body.map((slice) => renderSlice(slice)))}
    </>
  );
};

export default DesignedForDogsSection;
