import { useState } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Header from 'components/layout/Header';
// import Footer from 'components/layout/Footer';
import styles from './baseLayoutStyle';

const DynamicHeader = dynamic(() => import('components/layout/Header'), {
  loading: () => <p>...</p>,
});
const DynamicFooter = dynamic(() => import('components/layout/Footer'), {
  loading: () => <p>...</p>,
});
const useStyles = makeStyles(styles);

const BaseLayout = ({ children, campaign, content }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isCountdown = campaign.banner_type.includes('Countdown');
  return (
    <>
      <DynamicHeader
        campaign={campaign}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        content={content}
      />
      <Container
        maxWidth="lg"
        className={`${classes.container} ${
          isCountdown ? classes.extraPadding : null
        }`}
      >
        {children}
      </Container>
      <DynamicFooter content={content} />
    </>
  );
};

BaseLayout.propTypes = {
  campaign: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
};

export default BaseLayout;
