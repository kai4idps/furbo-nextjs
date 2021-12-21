import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { palette } from 'styles/theme';
import styles from './learnButtonStyle';

const useStyles = makeStyles(styles);

const getPath = (type) => {
  if (type === 'Furbo Dog Nanny') {
    return 'products/furbo-dog-nanny';
  } else if (type === 'Furbo Nanny Cam Bundle') {
    return 'products/furbo-nanny-cam-bundle';
  } else if (type === 'Saving Lives') {
    return 'pages/saving-lives';
  }
  return 'products/furbo-dog-nanny';
};

const getColor = (type) => {
  if (type === 'Blue') {
    return palette.blue;
  } else if (type === 'Grey') {
    return '#d8d8d8';
  } else {
    return 'transparent';
  }
};

const getTextColor = (type) => {
  if (type === 'Blue') {
    return palette.white;
  } else {
    return palette.black;
  }
};

const getBorder = (type) => {
  if (type === 'Transparent, Blue Outline') {
    return `2px ${palette.blue} solid`;
  } else if (type === 'Transparent, Grey Outline') {
    return `2px ${palette.black} solid`;
  } else {
    return 'transparent';
  }
};

const LearnButton = (props) => {
  const classes = useStyles();
  const { className, learnButtonText, color, link } = props;
  const btnClasses = `${classes.button} ${className || null}`;
  const router = useRouter();
  const { region, ...query } = router.query;

  const handleGaEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cta_click',
    });
  };

  return (
    <div className={classes.root}>
      <Link
        href={{
          pathname: `/${region}/${getPath(link)}`,
          query,
        }}
        passHref
      >
        <Button
          className={btnClasses}
          style={{
            backgroundColor: getColor(color),
            border: getBorder(color),
            color: getTextColor(color),
            '&,&:hover,&:focus': {
              backgroundgetColor: getColor(color),
            },
          }}
          onClick={handleGaEvent}
          id="learn-button"
        >
          {learnButtonText}
        </Button>
      </Link>
    </div>
  );
};

LearnButton.propTypes = {
  className: PropTypes.string,
  learnButtonText: PropTypes.string.isRequired,
  color: PropTypes.string,
  link: PropTypes.string,
};

export default LearnButton;
