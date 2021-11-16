import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import styles from './learnButtonStyle';

const useStyles = makeStyles(styles);

const getPath = (type) => {
  if (type === 'Furbo Dog Nanny') {
    return 'products/furbo-dog-nanny';
  } else if (type === 'Saving Lives') {
    return 'pages/saving-lives';
  }
  return 'products/furbo-dog-nanny';
};

const getColor = (type) => {
  if (type === 'Blue') {
    return '#1e7bac';
  } else {
    return 'transparent';
  }
};

const getBorder = (type) => {
  if (type === 'Transparent, Blue Outline') {
    return '2px #1e7bac solid';
  } else if (type === 'Transparent, Grey Outline') {
    return '2px #434343 solid';
  } else {
    return 'transparent';
  }
};

const LearnButton = (props) => {
  const classes = useStyles();
  const { className, learnButtonText, color, link } = props;
  const btnClasses = `${classes.button} ${className || null}`;
  const region = useSelector((state) => state.region.code);

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
        }}
        passHref
      >
        <Button
          className={btnClasses}
          style={{
            backgroundColor: getColor(color),
            border: getBorder(color),
            '&,&:hover,&:focus': {
              backgroundgetColor: getColor(color),
            },
          }}
          onClick={handleGaEvent}
        >
          {learnButtonText}
        </Button>
      </Link>
    </div>
  );
};

LearnButton.propTypes = {
  className: PropTypes.object,
  learnButtonText: PropTypes.string.isRequired,
  color: PropTypes.string,
  link: PropTypes.string,
};

export default LearnButton;
