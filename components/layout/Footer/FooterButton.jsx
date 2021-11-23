import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './footerButtonStyle';

const useStyles = makeStyles(styles);

const FooterButton = ({ info }) => {
  const isExternalLink =
    info.link.substring(0, 5) === 'https' ||
    info.link.substring(0, 4) === 'http';
  const isFunction = info.link.substring(0, 15) === 'javascript:void';
  const jsFunction = isFunction
    ? info.link.substring(16, info.link.length - 1)
    : '';
  const classes = useStyles();
  const router = useRouter();
  const { region, ...query } = router.query;

  return (
    <div className={classes.linkButtonContainer}>
      {!isFunction && (
        <Link
          href={{
            pathname: isExternalLink ? info?.link : `/${region}${info?.link}`,
            query,
          }}
          passHref
        >
          <Button className={classes.linkButton}>{info.title}</Button>
        </Link>
      )}
      {isFunction && (
        <Button className={classes.linkButton} onClick={() => eval(jsFunction)}>
          {info.title}
        </Button>
      )}
    </div>
  );
};

export default FooterButton;

FooterButton.propTypes = {
  info: PropTypes.object,
};
