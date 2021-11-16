import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Image from 'next/image';
import Link from 'next/link';
import { SHOP_ICON_SVG } from 'config/images/header';
import styles from './shopIconButtonStyle';

const useStyles = makeStyles(styles);

const ShopIconButton = () => {
  const classes = useStyles();
  const region = useSelector((state) => state.region.code);

  const handleGaEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cta_click',
    });
  };

  return (
    <Link
      href={{
        pathname: `/${region}/products/furbo-dog-camera`,
      }}
      passHref
    >
      <IconButton className={classes.button} onClick={handleGaEvent}>
        <Icon className={classes.image}>
          <Image
            alt="furbo-logo"
            src={SHOP_ICON_SVG}
            layout="fill"
            objectFit="contain"
          />
        </Icon>
      </IconButton>
    </Link>
  );
};

export default ShopIconButton;
