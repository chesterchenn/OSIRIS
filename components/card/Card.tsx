import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';

interface Props {
  children?: React.ReactNode;
}

const colors = [
  '#eccc68',
  '#ff7f50',
  '#ff6b81',
  '#ffa502',
  '#ff4757',
  '#7bed9f',
  '#1e90ff',
  '#5352ed',
  '#3742fa',
  '#2ed573',
];

export default function Card(props: Props) {
  const { children, ...rest } = props;
  const [randomOne, setRandomOne] = useState(0);
  const [randomTwo, setRandomTwo] = useState(0);
  useEffect(() => {
    const r1 = Math.floor(Math.random() * colors.length);
    const r2 = Math.floor(Math.random() * colors.length);
    setRandomOne(r1);
    setRandomTwo(r2);
  }, []);
  return (
    <div
      className={clsx(styles.card)}
      style={{
        background: `linear-gradient(to bottom right, ${colors[randomOne]}, ${colors[randomTwo]})`,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  children: null,
};
