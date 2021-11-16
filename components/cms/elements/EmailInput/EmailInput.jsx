import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { BLACK_TRIANGLE_SVG } from 'config/images/general';
import Image from 'components/Image';
import styles from './emailInputStyle';

const useStyles = makeStyles(styles);

const EmailInput = (props) => {
  const classes = useStyles();
  const { placeholder, action } = props;
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
          placeholder={placeholder}
        />
        <div className={classes.submitButtonContainer}>
          <IconButton className={classes.submitButton} type="submit">
            <Image
              className={classes.blackTriangle}
              src={BLACK_TRIANGLE_SVG}
              alt="email"
              type="image/svg+xml"
            />
          </IconButton>
        </div>
      </form>
    </div>
  );
};

EmailInput.propTypes = {
  placeholder: PropTypes.string,
  action: PropTypes.bool,
};

export default EmailInput;
