import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styles from './scrollToTopButtonStyle';

const useStyles = makeStyles(styles);

const transitionDuration = {
  enter: 500,
  exit: 500,
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ScrollToTopButton = () => {
  const classes = useStyles();
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollHeight =
    typeof window !== 'undefined' && window.document.body.scrollHeight - 2000;
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Hidden smUp>
      <div className={classes.root}>
        <Zoom
          in={scrollPosition > scrollHeight}
          timeout={transitionDuration}
          unmountOnExit
        >
          <Fab
            onClick={scrollTop}
            id="scroll-to-top-button"
            className={classes.fab}
          >
            <KeyboardArrowUpIcon className={classes.arrow} />
          </Fab>
        </Zoom>
      </div>
    </Hidden>
  );
};

export default ScrollToTopButton;
