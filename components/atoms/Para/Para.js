import React from "react";
import PropTypes from "prop-types";
import withStyles from '../../../lib/withStyles';
import styles from './Para.style';

const Para = props => {
  return(
    <props.tagName className={`${props.tagName}_class ${props.className}`}>{props.children}</props.tagName>
  );
};

Para.propTypes = {};

Para.defaultProps = {};

export default withStyles(Para, styles);

export {Para};