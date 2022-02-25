import React from 'react';
import styles from './style.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button(props: ButtonProps) {
  const { children, type, ...rest } = props;
  return (
    <button type={type} className={styles.btn} {...rest}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: null,
  type: 'button',
};
