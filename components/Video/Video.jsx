import { useState } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import useInView from 'react-cool-inview';
import { VISIBLE_OFFSET } from 'config/common';
const DynamicVideoComponent = dynamic(() => import('./VideoComponent'));

const Video = ({ title, src, width, height, className, ...props }) => {
  const [active, setActive] = useState(false);
  const { observe } = useInView({
    threshold: VISIBLE_OFFSET,
    unobserveOnEnter: 'true',
    onEnter: () => {
      setActive(true);
    },
  });

  return (
    <div ref={observe} className={className}>
      {active && (
        <DynamicVideoComponent
          title={title}
          src={src}
          width={width}
          height={height}
          {...props}
        />
      )}
    </div>
  );
};

Video.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default Video;
