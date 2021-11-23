import Image from 'components/Image';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { isEmpty } from 'src/helpers';
import styles from './fourOfFourStyle';

const useStyles = makeStyles(styles);

const FourOfFour = ({ content }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      {isEmpty(content.url) && <></>}
      {!isEmpty(content.url) && (
        <Image
          alt={smDown ? content.mobile.alt : content.alt}
          src={smDown ? content.mobile.url : content.url}
          width={
            smDown ? content.mobile.dimensions.width : content.dimensions.width
          }
          height={
            smDown
              ? content.mobile.dimensions.height
              : content.dimensions.height
          }
        />
      )}
    </div>
  );
};

export default FourOfFour;
