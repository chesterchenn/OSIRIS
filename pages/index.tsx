import Link from 'next/link';
import Head from 'next/head';

interface Nav {
  title: string;
  link: string;
}

export default function Home() {
  const navs: Nav[] = [
    {
      title: 'Color',
      link: '/color',
    },
    {
      title: 'Web 216',
      link: '/web216',
    },
  ];

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
