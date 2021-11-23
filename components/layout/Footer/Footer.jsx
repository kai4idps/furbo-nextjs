import { useState, Children } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Image from 'next/image';
import RegionDialog from 'components/RegionDialog';
import { REGION_INFO } from 'config/navigation';
import FooterButton from './FooterButton';
import EmailInput from './EmailInput';
import FooterAccordion from './FooterAccordion';
import styles from './footerStyle';
import { isEmpty } from 'src/helpers';
import SocialMediaButton from './SocialMediaButton';

const useStyles = makeStyles(styles);

const AccordionSummary = withStyles({
  root: {
    minHeight: '50px',
    height: '50px',
    padding: '0px',
    '&$expanded': {
      minHeight: '50px',
      height: '50px',
    },
  },
  content: {
    margin: 0,
    padding: '0px',
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles({
  root: {
    padding: '0px',
  },
})(MuiAccordionDetails);

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&::before': {
      display: 'none',
    },
  },
  expanded: {
    '&$expanded': {
      margin: 0,
    },
  },
})(MuiAccordion);

const date = new Date();

const Footer = ({ content }) => {
  const classes = useStyles();
  const router = useRouter();
  const { region, ...query } = router.query;
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });
  const [openRegionList, setOpenRegionList] = useState(false);

  if (isEmpty(region)) {
    return null;
  }

  const handleRegionEdit = () => {
    setOpenRegionList(!openRegionList);
    if (!smDown) {
      setTimeout(() => {
        window.scrollTo({
          top:
            document.body.scrollHeight || document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 300);
    }
  };

  const handleRegionListClose = () => {
    setOpenRegionList(false);
  };

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Hidden mdUp>
          <div className={classes.emailContainer}>
            <div className={classes.emailText}>{content.email_input_title}</div>
            {content.email_input_subtitle}
            <EmailInput action={content.email_input_action} />
          </div>
          <FooterAccordion title={content.about} list={content.about_list} />
          <FooterAccordion
            title={content.customer_support}
            list={content.customer_support_list}
          />
          <div className={classes.socialLinkContainer}>
            {Children.toArray(
              content.social_media_link.map((info) => (
                <SocialMediaButton info={info} />
              )),
            )}
          </div>
        </Hidden>
        <Hidden smDown>
          <Grid container className={classes.gridContainer}>
            <Grid item className={classes.gridItem} md={4}>
              <div className={classes.gridTitle}>{content.about}</div>
              <div className={classes.gridItemContainer}>
                {Children.toArray(
                  content.about_list.map((info) => (
                    <FooterButton key={info.title} info={info} />
                  )),
                )}
              </div>
            </Grid>
            <Grid item className={classes.gridItem} md={4}>
              <div className={classes.gridTitle}>
                {content.customer_support}
              </div>
              <div className={classes.gridItemContainer}>
                {Children.toArray(
                  content.customer_support_list.map((info) => (
                    <FooterButton key={info.title} info={info} />
                  )),
                )}
              </div>
            </Grid>
            <Grid item className={classes.gridItem} md={4}>
              <div className={classes.socialLinkContainer}>
                {Children.toArray(
                  content.social_media_link.map((info) => (
                    <SocialMediaButton info={info} />
                  )),
                )}
              </div>
              <div className={classes.emailContainer}>
                <div className={classes.emailText}>
                  {content.email_input_title}
                </div>
                {content.email_input_subtitle}
                <EmailInput action={content.email_input_action} />
              </div>
            </Grid>
          </Grid>
        </Hidden>
        <Divider variant="middle" className={classes.divider} />
        <div className={classes.bottomGrid}>
          <Button className={classes.flagButton} onClick={handleRegionEdit}>
            <Image
              className={classes.flag}
              src={REGION_INFO[region.toUpperCase()]?.image}
              alt={REGION_INFO[region.toUpperCase()]?.code}
            />
            <div className={classes.flagText}>
              {REGION_INFO[region.toUpperCase()]?.country}
            </div>
          </Button>
          <div className={classes.termsLinkContainer}>
            <div>
              {Children.toArray(
                content.copyright_list.map((info, index) => (
                  <>
                    <span>{index !== 0 && '|'}</span>
                    <Link
                      href={{
                        pathname: info?.link,
                        query,
                      }}
                      passHref
                    >
                      <Button className={classes.termsLinkButton}>
                        {info.title}
                      </Button>
                    </Link>
                  </>
                )),
              )}
            </div>
            <div className={classes.termsLinkText}>
              {`© ${date.getFullYear()}. ${content.all_rights_reserved}`}
            </div>
          </div>
        </div>
        <Hidden mdUp>
          <RegionDialog
            open={openRegionList}
            handleClose={handleRegionListClose}
            content={content}
          />
        </Hidden>
        <Hidden smDown>
          <div>
            <div className={classes.accordionContainer}>
              <Accordion elevation={0} expanded={openRegionList}>
                <AccordionSummary className={classes.hide} />
                <AccordionDetails className={classes.accordionDetails}>
                  <div className={classes.accordionTitle}>
                    {content.visit_your_location}
                  </div>
                  <RegionDialog
                    open={openRegionList}
                    handleClose={handleRegionListClose}
                    content={content}
                  />
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </Hidden>
      </Container>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      icon: PropTypes.node,
    }).isRequired,
  ),
  termsLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    }).isRequired,
  ),
};
