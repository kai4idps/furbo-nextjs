import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FURBO_LOGO_DARK_SVG } from 'config/images/header';
import styles from './homeButtonStyle';

const useStyles = makeStyles(styles);

const HomeButton = () => {
  const classes = useStyles();
  const router = useRouter();
  const { region, ...query } = router.query;

  return (
    <Link
      href={{
        pathname: `/${region}`,
        query,
      }}
      passHref
    >
      <Button className={classes.button} id="home-button">
        <div className={classes.image}>
          <Image
            alt="furbo-logo"
            src={FURBO_LOGO_DARK_SVG}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Button>
    </Link>
  );
};

export default HomeButton;
