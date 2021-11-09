import React from 'react';
import KeyVisualSlice from 'components/cms/slices/KeyVisualSlice';
import TwoCardsSlice from 'components/cms/slices/TwoCardsSlice';
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
  } else if (slice.slice_type === 'two_cards') {
    return (
      <TwoCardsSlice
        title={slice.primary.title}
        titleUnderline={slice.primary.title_underline}
        imageFullWidth={slice.primary.image_full_width}
        enableElevation={slice.primary.enable_elevation}
        content={slice.items}
      />
    );
  }
  return null;
};

const FurboForGoodSection = ({ ffgPage }) => {
  return (
    <>
      {React.Children.toArray(ffgPage.body.map((slice) => renderSlice(slice)))}
    </>
  );
};

export default FurboForGoodSection;
