import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { BLACK_TRIANGLE_SVG } from 'config/images/general';
import Image from 'next/image';
import styles from './emailInputStyle';

const useStyles = makeStyles(styles);

const EmailInput = ({ action }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form
        className={classes.form}
        autoComplete="off"
        action={action}
        method="post"
      >
        <InputBase
          className={classes.input}
          inputProps={{
            style: {
              padding: '0px 0px 0px 10px',
              fontFamily: 'Avenir',
            },
          }}
          name="EMAIL"
          type="email"
          placeholder="Email"
        />
        <div className={classes.submitButtonContainer}>
          <IconButton className={classes.submitButton} type="submit">
            <Image
              className={classes.blackTriangle}
              src={BLACK_TRIANGLE_SVG}
              alt="email"
            />
          </IconButton>
        </div>
      </form>
    </div>
  );
};

EmailInput.propTypes = {
  action: PropTypes.string,
};

export default EmailInput;
