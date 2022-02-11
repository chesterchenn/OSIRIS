import React from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';

interface Props {
  children?: React.ReactNode;
}

export default function Card(props: Props) {
  const { children, ...rest } = props;
  return (
    <div className={clsx(styles.card)} {...rest}>
      <div className={styles.card__body} />
      <div className={styles.card__footer}>{children}</div>
    </div>
  );
}

Card.defaultProps = {
  children: null,
};
