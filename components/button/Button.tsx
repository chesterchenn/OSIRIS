import React from 'react';
import styles from './style.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <button {...rest} className={styles.btn}>
      {children}
    </button>
  );
}

export default Button;
