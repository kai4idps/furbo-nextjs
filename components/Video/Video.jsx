import React from 'react';
import PropTypes from 'prop-types';
// import {
//   LazyLoadComponent,
//   trackWindowScroll,
// } from 'react-lazy-load-image-component';

const Video = ({
  title,
  src,
  visibleByDefault = false,
  useIntersectionObserver = true,
  rwd = false,
  width,
  height,
  className,
  scrollPosition,
  ...props
}) => {
  // if (visibleByDefault) {
  //   return <video title={title} src={src} {...props} />;
  // } else if (rwd) {
  //   return (
  //     <LazyLoadComponent
  //       visibleByDefault={visibleByDefault}
  //       useIntersectionObserver={useIntersectionObserver}
  //       scrollPosition={scrollPosition}
  //       style={{ width: '100%' }}
  //     >
  //       <div className={className}>
  //         <video
  //           title={title}
  //           src={src}
  //           width={width}
  //           height={height}
  //           {...props}
  //         />
  //       </div>
  //     </LazyLoadComponent>
  //   );
  // } else {
  //   return (
  // <LazyLoadComponent
  //   scrollPosition={scrollPosition}
  //   useIntersectionObserver={useIntersectionObserver}
  //   visibleByDefault={visibleByDefault}
  // >
  return (
    <div className={className}>
      <video title={title} src={src} width={width} height={height} {...props} />
    </div>
  );
  // </LazyLoadComponent>
  // );
  // }
};

Video.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  visibleByDefault: PropTypes.bool,
  rwd: PropTypes.bool,
  className: PropTypes.string,
  scrollPosition: PropTypes.object,
};

export default Video;
