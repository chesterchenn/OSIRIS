import Link from 'next/link';
import Head from 'next/head';
import Card from 'components/card';
import { navs } from './config';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {navs.map((n) => (
        <Card key={n.link}>
          <Link href={n.link}>{n.title}</Link>
        </Card>
      ))}
    </>
  );
}
