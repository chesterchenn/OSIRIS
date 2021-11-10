import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h2>
        <Link href='/web216'>Web 216</Link>
      </h2>
      <h2>
        <Link href='/color'>Color</Link>
      </h2>
    </>
  );
}
