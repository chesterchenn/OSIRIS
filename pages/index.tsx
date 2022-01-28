import Link from 'next/link';
import Card from 'components/card';
import styles from './home.module.scss';
import { navs } from '../config';

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        {navs.map((n) => (
          <Card key={n.link}>
            <Link href={n.link}>{n.title}</Link>
          </Card>
        ))}
      </div>
    </>
  );
}
