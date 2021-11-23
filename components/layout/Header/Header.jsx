import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import HomeButton from 'components/button/HomeButton';
import AccountIconButton from 'components/button/AccountIconButton';
import Banner from 'components/layout/Banner';
import HeaderLinks from 'components/layout/HeaderLinks';
import ShopButton from 'components/button/ShopButton';
import ShopIconButton from 'components/button/ShopIconButton';
import MenuIconButton from 'components/button/MenuIconButton';
import Fade from '@material-ui/core/Fade';
import { HEADER_ROUTES } from 'config/routes/ca';
import styles from './headerStyle';

const useStyles = makeStyles(styles);

const Header = ({ campaign, content, drawerOpen, setDrawerOpen }) => {
  const classes = useStyles();
  const router = useRouter();
  const isCountdown = campaign?.banner_type?.includes('Countdown');
  const { region } = router.query;
  const pathname = router.asPath.split('?')[0];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Fade in={true} timeout={1000}>
      <AppBar className={classes.appBar} elevation={0}>
        <div style={{ width: '100%' }}>
          <Banner campaign={campaign} />
          <Container maxWidth="lg" className={classes.outerContainer}>
            <Toolbar className={classes.toolbar}>
              <Hidden mdUp>
                <div className={classes.leftContainer}>
                  <MenuIconButton onClick={handleDrawerToggle} />
                </div>
                <HomeButton />
                <div className={classes.rightContainer}>
                  <AccountIconButton />
                  {pathname !== `/${region}/products/furbo-dog-camera` &&
                    pathname !== `/${region}/pages/cart` && (
                      <ShopIconButton className={classes.shopIconButton} />
                    )}
                </div>
              </Hidden>
              <Hidden smDown>
                <HomeButton />
                <div className={classes.rightContainer}>
                  <HeaderLinks
                    routes={HEADER_ROUTES(content)}
                    content={content}
                    onClose={() => setDrawerOpen(false)}
                  />
                  <div className={classes.headerSpacing} />
                  <AccountIconButton />
                  {pathname !== `/${region}/products/furbo-dog-camera` &&
                    pathname !== `/${region}/pages/cart` && (
                      <ShopButton text={content.shop_now} />
                    )}
                </div>
              </Hidden>
            </Toolbar>
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor="left"
                open={drawerOpen}
                classes={{
                  paper: `${isCountdown ? classes.extraPadding : null} ${
                    classes.drawerPaper
                  }`,
                }}
                BackdropProps={{ invisible: true }}
                onClose={handleDrawerToggle}
                elevation={2}
              >
                <div className={classes.drawerContainer}>
                  <div className={classes.pageLinks}>
                    <HeaderLinks
                      routes={HEADER_ROUTES(content)}
                      content={content}
                      onClose={() => setDrawerOpen(false)}
                    />
                  </div>
                </div>
              </Drawer>
            </Hidden>
          </Container>
        </div>
      </AppBar>
    </Fade>
  );
};

Header.propTypes = {
  campaign: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  setDrawerOpen: PropTypes.func.isRequired,
};

export default Header;
