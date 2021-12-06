import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Image from 'components/Image';
import { isEmpty } from 'src/helpers';
import { colorFontTime } from 'src/customHtml';
import styles from './bannerStyle';

const useStyles = makeStyles(styles);

const BannerContent = ({ campaign }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={classes.root}>
      <div
        className={classes.container}
        style={{
          color: campaign.banner_font_color,
          backgroundColor: campaign.banner_background_color,
          height: campaign.banner_type.includes('Countdown') ? '80px' : null,
        }}
      >
        {!isEmpty(campaign.banner_image_left) && (
          <div className={classes.leftImg}>
            <Image
              alt={campaign.banner_image_left.alt}
              src={campaign.banner_image_left.url}
            />
          </div>
        )}
        <span
          className={classes.bannerContent}
          style={{
            fontSize: smDown ? campaign.mobile_font_size : campaign.font_size,
          }}
        >
          <RichText
            render={
              smDown ? campaign.mobile_banner_content : campaign.banner_content
            }
            htmlSerializer={colorFontTime}
          />
        </span>
        {!isEmpty(campaign.banner_image_right) && (
          <div className={classes.rightImg}>
            <Image
              alt={campaign.banner_image_right.alt}
              src={campaign.banner_image_right.url}
            />
          </div>
        )}
      </div>
    </div>
  );
};

BannerContent.propTypes = {
  campaign: PropTypes.object,
};

export default BannerContent;
