import { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap" rel="stylesheet" />
      </Head>
      <header className="header-wrapper flex items-center justify-between">
        <h1 className="flex-initial text-4xl">Cameron MacDonald</h1>
        <nav className="flex gap-10">
          <Link className="text-xl" href="">About</Link>
          <Link className="text-xl" href="">Work</Link>
          <Link className="text-xl" href="">Blog</Link>
        </nav>
      </header>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}