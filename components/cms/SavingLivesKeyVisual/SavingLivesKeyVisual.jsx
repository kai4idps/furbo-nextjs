import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { RichText } from 'prismic-reactjs';
import { useCountUp } from 'react-countup';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useInView from 'react-cool-inview';
import VisibleSensorAnimation from 'components/VisibleSensorAnimation';
import Grid from '@material-ui/core/Grid';
import styles from './savingLivesKeyVisualStyle';

const useStyles = makeStyles(styles);

const SavingLivesKeyVisual = ({ savingLivesPage }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { countUp, start } = useCountUp({
    start: 0,
    end: savingLivesPage.dogs_saved_count,
    duration: 5,
    redraw: true,
  });

  const { observe } = useInView({
    onChange: () => {
      start();
    },
  });

  return (
    <VisibleSensorAnimation animation="grow">
      <div
        className={classes.root}
        style={{
          backgroundImage: smDown
            ? `url(${savingLivesPage.key_visual_image_mobile.url})`
            : `url(${savingLivesPage.key_visual_image_desktop.url})`,
          height: smDown
            ? 'auto'
            : savingLivesPage.key_visual_image_desktop.dimensions.height,
        }}
      >
        <Grid container>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className={classes.text}>
              <div className={classes.title}>
                {RichText.render(savingLivesPage.title)}
              </div>
              <div className={classes.counterContainer}>
                <div ref={observe} className={classes.counter}>
                  <div className={classes.counterBox}>
                    {Math.floor(countUp / 1000) % 10}
                  </div>
                  <div className={classes.counterBox}>
                    {Math.floor(countUp / 100) % 10}
                  </div>
                  <div className={classes.counterBox}>
                    {Math.floor(countUp / 10) % 10}
                  </div>
                  <div
                    className={classes.counterBox}
                    style={{ color: '#cc684a' }}
                  >
                    {countUp % 10}
                  </div>
                </div>
                <span className={classes.counterText}>
                  {savingLivesPage.dogs_saved_text}
                </span>
              </div>
              <div className={classes.subtitle}>
                {RichText.render(savingLivesPage.subtitle)}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </VisibleSensorAnimation>
  );
};

SavingLivesKeyVisual.propTypes = {
  savingLivesPage: PropTypes.object.isRequired,
};

export default SavingLivesKeyVisual;
