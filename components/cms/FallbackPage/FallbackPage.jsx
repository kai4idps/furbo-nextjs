import Image from 'components/Image';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { isEmpty } from 'src/helpers';
import styles from './fallbackPageStyle';

const useStyles = makeStyles(styles);

const FallbackPage = ({ content }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  if (isEmpty(content?.url)) {
    return (
      <div className={`${classes.root} ${classes.extraPadding}`}>
        <h1>404 Page Not Found</h1>;
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Image
        className={classes.image}
        alt={smDown ? content.mobile.alt : content.alt}
        src={smDown ? content.mobile.url : content.url}
      />
    </div>
  );
};

FallbackPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default FallbackPage;
