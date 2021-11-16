import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import styles from './customButtonStyle';

const useStyles = makeStyles(styles);

const CustomButton = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { className, text, color, link = '', center } = props;
  const btnClasses = `${classes.button} ${className || null}`;

  const handleGaEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cta_click',
    });
  };

  return (
    <div
      className={classes.root}
      style={{
        justifyContent: smDown ? 'center' : center ? 'center' : 'flex-start',
      }}
    >
      <Link
        href={{
          pathname: link.url,
        }}
        passHref
      >
        <Button
          className={btnClasses}
          style={{
            backgroundColor: color,
            '&,&:hover,&:focus': {
              backgroundgetColor: color,
            },
          }}
          onClick={handleGaEvent}
        >
          {text}
        </Button>
      </Link>
    </div>
  );
};

CustomButton.propTypes = {
  className: PropTypes.object,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  link: PropTypes.object,
  center: PropTypes.bool,
};

export default CustomButton;
