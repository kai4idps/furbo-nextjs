import { useState } from 'react';
import PropTypes from 'prop-types';
import useInView from 'react-cool-inview';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import { VISIBLE_OFFSET } from 'config/common';

const typeArray = ['fade', 'grow'];

const VisibleSensorAnimation = ({ children, animation, display = 'flex' }) => {
  const [active, setActive] = useState(false);

  const { observe } = useInView({
    threshold: VISIBLE_OFFSET,
    unobserveOnEnter: 'true',
    onEnter: () => {
      setActive(true);
    },
  });

  if (!typeArray.some((type) => type === animation)) {
    return <>{children}</>;
  }

  return (
    <div
      ref={observe}
      style={{
        display,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {animation === 'fade' && <Fade in={active}>{children}</Fade>}
      {animation === 'grow' && <Grow in={active}>{children}</Grow>}
    </div>
  );
};

VisibleSensorAnimation.propTypes = {
  animation: PropTypes.string,
  display: PropTypes.string,
};

export default VisibleSensorAnimation;
