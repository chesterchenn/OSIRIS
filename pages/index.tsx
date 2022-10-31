import React from 'react';
import Link from 'next/link';
import Card from 'components/card';
import styles from './home.module.scss';
import { navs } from '../config';

export default function Home() {
  return (
    <div className={styles.home}>
      {navs.map((n) => (
        <Link href={n.link} key={n.link}>
          <Card>{n.title}</Card>
        </Link>
      ))}
    </div>
  );
}
