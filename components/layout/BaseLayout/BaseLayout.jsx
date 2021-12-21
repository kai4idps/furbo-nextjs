import { useState } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './baseLayoutStyle';

const DynamicHeader = dynamic(() => import('components/layout/Header'), {
  loading: () => <></>,
});
const DynamicFooter = dynamic(() => import('components/layout/Footer'), {
  loading: () => <></>,
});
const DynamicScrollToTopButton = dynamic(
  () => import('components/button/ScrollToTopButton'),
  {
    loading: () => <></>,
  },
);
const DynamicCookieConsentSnackbar = dynamic(
  () => import('components/CookieConsentSnackbar'),
  {
    loading: () => <></>,
  },
);

const useStyles = makeStyles(styles);

const BaseLayout = ({ children, campaign, content }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isCountdown = campaign.banner_type.includes('Countdown');

  return (
    <div style={{ backgroundColor: theme.palette.white }}>
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
      {content.enable_cookie_consent && (
        <DynamicCookieConsentSnackbar
          message={RichText.render(content.message)}
          buttonText={content.accept}
        />
      )}
      <DynamicScrollToTopButton />
    </div>
  );
};

BaseLayout.propTypes = {
  campaign: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
};

export default BaseLayout;
