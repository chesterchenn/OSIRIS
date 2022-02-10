import React from 'react';
import Link from 'next/link';

export function BackToHome() {
  return (
    <div>
      <Link href="/">{(href: string) => <a href={href}>Back to Home</a>}</Link>
    </div>
  );
}
