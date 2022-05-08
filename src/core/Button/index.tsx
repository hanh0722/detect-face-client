import { FC, MouseEvent } from "react";
import PropTypes from 'prop-types';
import { ButtonProps } from "../../types/components/button";
import { isFunction } from "../../utils/types";
import { classList } from "../../utils/string";
import styles from './styles.module.scss';

const Button: FC<ButtonProps> = (props) => {
  const { onClick, disabled, isLoading, type, className, children, ...restProps } = props;

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if (isFunction(onClick)) {
      onClick(event);
    }
  }
  return (
    <button disabled={disabled} type={type || 'button'} className={classList(styles.button, className)} onClick={onClickHandler} {...restProps}>{children}</button>
  )
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  type: 'button',
  disabled: false,
  isLoading: false
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default Button;