import Link from 'next/link';

export default function BackToHome() {
  return (
    <div>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
}
