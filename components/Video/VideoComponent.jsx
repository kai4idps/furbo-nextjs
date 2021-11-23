import PropTypes from 'prop-types';

const VideoComponent = ({ title, src, width, height, ...props }) => (
  <video title={title} src={src} width={width} height={height} {...props} />
);

VideoComponent.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default VideoComponent;
