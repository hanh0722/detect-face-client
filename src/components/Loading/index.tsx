import React, { FC } from "react";
import PropTypes from 'prop-types';
import { classList } from "../../utils/string";
import styles from './styles.module.scss';
import { LoadingProps } from "../../types/components/loading";

const Loading: FC<LoadingProps> = (props) => {
  const { className, variant = 'md', ...restProps} = props;
  return (
    <div {...restProps} className={classList(styles["lds-ring"], styles[variant], className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

Loading.defaultProps = {
  className: '',
  variant: 'md'
};

Loading.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
}

export default Loading;