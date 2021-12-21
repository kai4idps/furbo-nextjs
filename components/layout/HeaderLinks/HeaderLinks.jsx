import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from 'components/button/AccountButton';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Image from 'next/image';
import RegionDialog from 'components/RegionDialog';
import { REGION_INFO } from 'config/navigation';
import { PAGE_KEYS } from 'config/routes';
import styles from './headerLinksStyle';
import Link from 'next/link';
import { isEmpty } from 'src/helpers';

const useStyles = makeStyles(styles);

const HeaderButton = ({ item, onClick, showIcon = true }) => {
  const classes = useStyles();
  const router = useRouter();
  const {
    path, // eslint-disable-line no-unused-vars
    region, // eslint-disable-line no-unused-vars
    ...query
  } = router.query;
  return (
    <Link
      href={{
        pathname: item.path,
        query,
      }}
      passHref
    >
      <Button
        className={classes.button}
        startIcon={
          showIcon && !isEmpty(item.icon) ? (
            <div
              style={{
                position: 'relative',
                top: '50%',
                display: 'flex',
                left: 0,
                width: '45px',
                height: '45px',
              }}
            >
              <Image
                src={item.icon.src}
                alt="header-icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ) : null
        }
        onClick={onClick}
        id="header-button"
      >
        {item.title}
      </Button>
    </Link>
  );
};

const getProductListCount = (array) => {
  const enableProduct =
    array.find((item) => item.key === PAGE_KEYS.PRODUCTS)?.enabled === true;
  const enableFdn =
    array.find((item) => item.key === PAGE_KEYS.FURBO_DOG_NANNY)?.enabled ===
    true;
  const enableFaas =
    array.find((item) => item.key === PAGE_KEYS.FAAS)?.enabled === true;
  return [enableProduct, enableFdn, enableFaas].filter(Boolean).length;
};

const HeaderLinks = ({ routes, onClose, content }) => {
  const [openRegionList, setOpenRegionList] = useState(false);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });
  const [productOpen, setProductOpen] = useState(smDown);
  const router = useRouter();
  const { region } = router.query;
  const classes = useStyles();
  const productListCount = getProductListCount(routes);
  const moveClass = `${
    smDown
      ? productOpen
        ? productListCount > 2
          ? classes.moveDownMore
          : classes.moveDown
        : classes.moveUp
      : null
  }`;
  const isProductDropdown = productListCount >= 2;
  const pageOnClick = () => {
    onClose();
    setProductOpen(false);
  };

  const productOnClick = () => {
    setProductOpen(!productOpen);
  };

  const handleRegionEdit = () => {
    setOpenRegionList(!openRegionList);
  };

  const handleRegionListClose = () => {
    setOpenRegionList(false);
  };

  return (
    <>
      <List className={classes.list}>
        {isProductDropdown && (
          <ListItem className={classes.listItem}>
            <Button className={classes.button} onClick={() => productOnClick()}>
              {content.our_products}
              <ExpandMore
                className={
                  productOpen ? classes.expandMore : classes.expandLess
                }
              />
            </Button>
          </ListItem>
        )}
        {React.Children.toArray(
          routes.map((item) => {
            if (item.enabled !== true) {
              return null;
            }
            if (
              isProductDropdown &&
              (item.key === PAGE_KEYS.PRODUCTS ||
                item.key === PAGE_KEYS.FURBO_DOG_NANNY ||
                item.key === PAGE_KEYS.FAAS)
            ) {
              return null;
            }
            return (
              <ListItem className={`${classes.listItem} ${moveClass}`}>
                <HeaderButton
                  item={item}
                  onClick={pageOnClick}
                  showIcon={isProductDropdown}
                />
              </ListItem>
            );
          }),
        )}
        {smDown && (
          <>
            <ListItem className={moveClass}>
              <Divider variant="middle" className={classes.drawerDivider} />
            </ListItem>
            <ListItem className={`${classes.listItem} ${moveClass}`}>
              <AccountButton
                className={classes.accountButton}
                text={
                  <div className={classes.accountText}>{content.sign_in}</div>
                }
              />
            </ListItem>
            <ListItem className={`${classes.listItem} ${moveClass}`}>
              <Button className={classes.button} onClick={handleRegionEdit}>
                <div className={classes.flag}>
                  <Image
                    src={REGION_INFO[region]?.image}
                    alt={REGION_INFO[region]?.code}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className={classes.flagText}>
                  {REGION_INFO[region]?.country}
                </div>
              </Button>
            </ListItem>
            <RegionDialog
              open={openRegionList}
              handleClose={handleRegionListClose}
              content={content}
            />
          </>
        )}
      </List>
      {isProductDropdown && (
        <Grow in={productOpen} className={classes.productList}>
          <List disablePadding={true}>
            {React.Children.toArray(
              routes.map((item) => {
                if (item.enabled !== true) {
                  return null;
                }
                if (
                  item.key !== PAGE_KEYS.PRODUCTS &&
                  item.key !== PAGE_KEYS.FURBO_DOG_NANNY &&
                  item.key !== PAGE_KEYS.FAAS
                ) {
                  return null;
                }
                return (
                  <>
                    <Hidden smDown>
                      {item.key !== PAGE_KEYS.PRODUCTS && (
                        <ListItem className={classes.listItem}>
                          <div className={classes.divider} />
                        </ListItem>
                      )}
                    </Hidden>
                    <ListItem className={classes.listItem}>
                      <HeaderButton item={item} onClick={pageOnClick} />
                    </ListItem>
                  </>
                );
              }),
            )}
          </List>
        </Grow>
      )}
    </>
  );
};

HeaderLinks.defaultProps = {
  routes: [],
};

HeaderLinks.propTypes = {
  routes: PropTypes.array.isRequired,
  content: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default HeaderLinks;
