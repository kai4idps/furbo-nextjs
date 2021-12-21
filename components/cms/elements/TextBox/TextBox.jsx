import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Image from 'components/Image';
import { colorFont } from 'src/customHtml';
import styles from './textBoxStyle';

const useStyles = makeStyles(styles);

const TextBox = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { icon, text, backgroundColor = theme.palette.white } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: backgroundColor }}>
      <div className={classes.imageContainer}>
        <Image className={classes.image} src={icon.url} alt={icon.alt} />
      </div>
      <div style={{ paddingTop: 4 }}>
        <RichText render={text} htmlSerializer={colorFont} />
      </div>
    </div>
  );
};

TextBox.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.array,
  backgroundColor: PropTypes.string,
};

export default TextBox;
