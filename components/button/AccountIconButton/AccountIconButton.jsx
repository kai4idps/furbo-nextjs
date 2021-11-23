import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Image from 'next/image';
import Link from 'next/link';
import { ACCOUNT_ICON_SVG } from 'config/images/header';
import { useRouter } from 'next/router';
import styles from './accountIconButtonStyle';

const useStyles = makeStyles(styles);

const AccountIconButton = () => {
  const classes = useStyles();
  const router = useRouter();
  const {
    region, // eslint-disable-line no-unused-vars
    ...query
  } = router.query;

  return (
    <Link
      href={{
        pathname: 'https://furbo.com/account',
        query,
      }}
      passHref
    >
      <IconButton className={classes.button} id="account-icon-button">
        <Icon className={classes.image}>
          <Image
            alt="furbo-logo"
            src={ACCOUNT_ICON_SVG}
            layout="fill"
            objectFit="contain"
          />
        </Icon>
      </IconButton>
    </Link>
  );
};

export default AccountIconButton;
