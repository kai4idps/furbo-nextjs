import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Image from 'components/Image';
import Timeline from './Timeline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import styles from './brandStoryPageStyle';
const useStyles = makeStyles(styles);

const BrandStoryPage = ({ brandStoryPage }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" className={classes.container}>
      <VisibleSensorAnimation animation="grow">
        <div
          className={classes.keyVisual}
          style={{
            backgroundImage: smDown
              ? `url(${brandStoryPage.key_visual_image_mobile.url})`
              : `url(${brandStoryPage.key_visual_image_desktop.url})`,
          }}
        >
          <Grid container>
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={classes.keyVisualTitle}
            >
              {RichText.render(brandStoryPage.key_visual_title)}
            </Grid>
          </Grid>
        </div>
      </VisibleSensorAnimation>
      <VisibleSensorAnimation animation="grow">
        <div className={classes.ourStory}>
          <Grid container>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes.ourStoryTitle}
            >
              {brandStoryPage.our_story_title}
            </Grid>
            <Grid
              item
              xl={5}
              lg={5}
              md={5}
              sm={12}
              xs={12}
              className={classes.text}
            >
              {brandStoryPage.text1}
              <br />
              <br />
              {brandStoryPage.text2}
            </Grid>
            <Grid
              item
              xl={7}
              lg={7}
              md={7}
              sm={12}
              xs={12}
              className={classes.center}
            >
              <Image
                className={classes.image}
                src={brandStoryPage.home_alone_image.url}
                alt={brandStoryPage.home_alone_image.alt}
              />
            </Grid>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes.text}
            >
              {brandStoryPage.text3}
              <div className={classes.quote}>{brandStoryPage.quote}</div>
              {brandStoryPage.text4}
            </Grid>
          </Grid>
        </div>
      </VisibleSensorAnimation>
      <Timeline
        info={brandStoryPage.timeline_slides}
        title={brandStoryPage.timeline}
      />
    </Container>
  );
};

BrandStoryPage.propTypes = {
  brandStoryPage: PropTypes.object.isRequired,
};

export default BrandStoryPage;
