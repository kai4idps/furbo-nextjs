import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import styles from './flagButtonStyle';

const useStyles = makeStyles(styles);

const FlagButton = (props) => {
  const { info } = props;
  const classes = useStyles();
  const router = useRouter();

  return (
    <Link
      href={{
        pathname: info.isRedirect ? info.href : `/${info.code}`,
        query: router.query,
      }}
      passHref
    >
      <Button className={classes.button}>
        <div className={classes.image}>
          <Image
            src={info.image}
            alt={info.country}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={classes.text}>{info.country}</div>
      </Button>
    </Link>
  );
};

FlagButton.propTypes = {
  info: PropTypes.object,
};

export default FlagButton;
