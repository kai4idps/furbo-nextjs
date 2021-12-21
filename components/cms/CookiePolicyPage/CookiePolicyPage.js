import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { RichText } from 'prismic-reactjs';
import styles from './cookiePolicyPageStyle';

const useStyles = makeStyles(styles);

const CookiePolicyPage = ({ title, content }) => {
  const classes = useStyles();
  console.log('content', content);
  return (
    <div className={classes.container}>
      <div className={classes.title}>{RichText.render(title)}</div>
      <div className={classes.content}>{RichText.render(content)}</div>
    </div>
  );
};

CookiePolicyPage.propTypes = {
  title: PropTypes.array.isRequired,
  content: PropTypes.array.isRequired,
};

export default CookiePolicyPage;
