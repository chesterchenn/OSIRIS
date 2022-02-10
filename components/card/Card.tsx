import React from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export function Card(props: Props) {
  const { ...rest } = props;
  return (
    <div className={clsx(styles.card)} {...rest}>
      <div className={styles.card__body} />
      <div className={styles.card__footer}>{props.children}</div>
    </div>
  );
}
