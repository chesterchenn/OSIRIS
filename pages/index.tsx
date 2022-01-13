import Link from 'next/link';
import Head from 'next/head';
import { navs } from './config';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {navs.map((n) => (
        <h2 key={n.link}>
          <Link href={n.link}>{n.title}</Link>
        </h2>
      ))}
    </>
  );
}
