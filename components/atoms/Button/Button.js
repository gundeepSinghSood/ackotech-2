/* eslint-disable react/default-props-match-prop-types */
// @flow
/**
 * Button component to present primary button and handle all the click events
 * @module Button
 */
import type from 'react';
import Link from '../Anchor';
import withStyles from '../../../lib/withStyles';
import styles from './Button.style';

const Button = ({
  className,
  children,
  inheritedStyles,
  type,
  primary,
  secondary,
  elementRef,
  disabled,
  ariaLabel,
  value,
  buttonWithLink,
  url,
  ...others
}) =>
  /* eslint-disable react/button-has-type */
  buttonWithLink ? (
    <Link to={url}>
      <button
        className={className}
        type={type}
        {...others}
        ref={elementRef}
        disabled={disabled}
        aria-label={ariaLabel || null}
        value={value}>
        {children}
      </button>
    </Link>
  ) : (
    <button
      className={className}
      type={type}
      {...others}
      ref={elementRef}
      disabled={disabled}
      aria-label={ariaLabel || null}
      value={value}>
      {children}
    </button>
  );
/* eslint-enable react/button-has-type */

Button.defaultProps = {
  inheritedStyles: '',
  type: 'button',
  primary: false,
  secondary: false,
  elementRef: undefined,
  disabled: false,
  ariaLabel: '',
};

export default withStyles(Button, styles);

export { Button as ButtonVanilla };
