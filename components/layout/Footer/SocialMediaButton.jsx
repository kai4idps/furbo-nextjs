import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import YouTube from '@material-ui/icons/YouTube';
import styles from './socialMediaButtonStyle';

const useStyles = makeStyles(styles);

const SocialMediaIcon = ({ type }) => {
  const classes = useStyles();
  if (type === 'Facebook') {
    return <Facebook className={classes.icon} />;
  } else if (type === 'Instagram') {
    return <Instagram className={classes.icon} />;
  } else if (type === 'Youtube') {
    return <YouTube className={classes.icon} />;
  } else {
    return <Facebook className={classes.icon} />;
  }
};

SocialMediaIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

const SocialMediaButton = ({ info }) => {
  const classes = useStyles();
  return (
    <Link
      href={{
        pathname: info.link,
      }}
      passHref
    >
      <IconButton
        id="footer-button"
        key={info.type}
        className={classes.iconButton}
      >
        <SocialMediaIcon type={info.type} />
      </IconButton>
    </Link>
  );
};

export default SocialMediaButton;

SocialMediaButton.propTypes = {
  info: PropTypes.object.isRequired,
};
