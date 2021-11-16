import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from 'components/button/AccountButton';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Image from 'next/image';
import RegionDialog from 'components/RegionDialog';
import { REGION_INFO } from 'config/navigation';
import { PAGE_KEYS } from 'config/routes/routes';
import styles from './headerLinksStyle';
import Link from 'next/link';

const useStyles = makeStyles(styles);

const HeaderButton = ({ item, onClick, showIcon = true }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Link
      href={{
        pathname: item.path,
      }}
      passHref
    >
      <Button
        className={classes.button}
        startIcon={
          showIcon ? (smDown ? item.icon.smDown : item.icon.mdUp) : null
        }
        onClick={onClick}
      >
        {item.title}
      </Button>
    </Link>
  );
};

const productDropdown = (array) => {
  const enableProduct =
    array.find((item) => item.key === PAGE_KEYS.PRODUCTS)?.enabled === true;
  const enableFdn =
    array.find((item) => item.key === PAGE_KEYS.FURBO_DOG_NANNY)?.enabled ===
    true;
  const enableFass =
    array.find((item) => item.key === 'NANNY_CAM_BUNDLE')?.enabled === true;
  return enableProduct ? enableFdn || enableFass : enableFdn && enableFass;
};

const HeaderLinks = ({ routes, onClose, content }) => {
  const [openRegionList, setOpenRegionList] = useState(false);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });
  const [productOpen, setProductOpen] = useState(smDown);
  const region = useSelector((state) => state.region.code);
  const classes = useStyles();
  const isProductDropdown = productDropdown(routes);
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
            if (!item.enabled) {
              return null;
            }
            if (
              isProductDropdown &&
              (item.key === PAGE_KEYS.PRODUCTS ||
                item.key === PAGE_KEYS.FURBO_DOG_NANNY)
            ) {
              return null;
            }
            return (
              <ListItem
                className={`${classes.listItem} ${
                  smDown
                    ? productOpen
                      ? classes.moveDown
                      : classes.moveUp
                    : null
                }`}
              >
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
            <ListItem
              className={
                smDown
                  ? productOpen
                    ? classes.moveDown
                    : classes.moveUp
                  : null
              }
            >
              <Divider variant="middle" className={classes.drawerDivider} />
            </ListItem>
            <ListItem
              className={`${classes.listItem} ${
                smDown
                  ? productOpen
                    ? classes.moveDown
                    : classes.moveUp
                  : null
              }`}
            >
              <AccountButton
                className={classes.accountButton}
                text={
                  <div className={classes.accountText}>{content.sign_in}</div>
                }
              />
            </ListItem>
            <ListItem
              className={`${classes.listItem} ${
                smDown
                  ? productOpen
                    ? classes.moveDown
                    : classes.moveUp
                  : null
              }`}
            >
              <Button className={classes.button} onClick={handleRegionEdit}>
                <div className={classes.flag}>
                  <Image
                    src={REGION_INFO[region.toUpperCase()]?.image}
                    alt={REGION_INFO[region.toUpperCase()]?.code}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className={classes.flagText}>
                  {REGION_INFO[region.toUpperCase()]?.country}
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
          <List>
            {React.Children.toArray(
              routes.map((item) => {
                if (
                  item.key !== PAGE_KEYS.PRODUCTS &&
                  item.key !== PAGE_KEYS.FURBO_DOG_NANNY &&
                  item.key !== 'NANNY_CAM_BUNDLE'
                ) {
                  return null;
                }
                return (
                  <>
                    {item.key !== PAGE_KEYS.PRODUCTS && (
                      <ListItem className={classes.listItem}>
                        <div className={classes.divider} />
                      </ListItem>
                    )}
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
