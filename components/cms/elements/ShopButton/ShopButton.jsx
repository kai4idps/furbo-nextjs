import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './shopButtonStyle';

const useStyles = makeStyles(styles);

const ShopButton = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { className, shopButtonText, center = false, onClick } = props;
  const btnClasses = `${classes.button} ${className || null}`;
  const region = useSelector((state) => state.region.code);
  const router = useRouter();
  return (
    <div
      className={classes.root}
      style={{
        justifyContent: smDown ? 'center' : center ? 'center' : 'flex-start',
      }}
    >
      <Link
        href={{
          pathname:
            router.pathname === `/${region}/products/furbo-dog-camera`
              ? `/${region}/pages/cart`
              : `/${region}/products/furbo-dog-camera`,
          query: router.query,
        }}
        passHref
      >
        <Button className={btnClasses} onClick={onClick}>
          {shopButtonText}
        </Button>
      </Link>
    </div>
  );
};

export default ShopButton;

ShopButton.propTypes = {
  className: PropTypes.string,
  shopButtonText: PropTypes.string.isRequired,
  center: PropTypes.bool,
  onClick: PropTypes.func,
};
