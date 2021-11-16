import React from 'react';
import PropTypes from 'prop-types';
import useInView from 'react-cool-inview';
// import {
//   LazyLoadComponent,
//   trackWindowScroll,
// } from 'react-lazy-load-image-component';

const Video = ({ title, src, width, height, className, ...props }) => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  return (
    <>
      <div className={className} ref={observe}>
        {inView && (
          <video
            title={title}
            src={src}
            width={width}
            height={height}
            {...props}
          />
        )}
      </div>
    </>
  );
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
