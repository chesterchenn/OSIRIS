import React from 'react';
import styles from './style.module.scss';

type IProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, IProps>((props, ref) => (
  <input autoComplete="off" className={styles.input} {...props} ref={ref} />
));

export default Input;
