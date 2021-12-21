import PropTypes from 'prop-types';
import { isEmpty } from 'src/helpers';

const Image = ({
  alt,
  src,
  fallback,
  justifyContent = 'center',
  alignItems = 'center',
  type = 'image/webp',
  loading = 'lazy',
  width,
  height,
  ...props
}) => {
  if (isEmpty(src)) {
    return null;
  }
  return (
    <picture
      style={{
        display: 'flex',
        justifyContent,
        alignItems,
        maxHeight: '100%',
        maxWidth: '100%',
      }}
    >
      <source srcSet={src} type={type} />
      <img
        alt={alt}
        src={isEmpty(fallback) ? src : fallback}
        loading={loading}
        width={width}
        height={height}
        {...props}
      />
    </picture>
  );
};

Image.defaultProps = {
  alt: '',
  justifyContent: 'center',
  alignItems: 'center',
  type: 'image/webp',
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  fallback: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Image;
