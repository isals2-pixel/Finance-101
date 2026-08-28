import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Finance Academy',
  description: 'A private finance curriculum. Educational only - not financial advice.',
  manifest: 'manifest.webmanifest',
  appleWebApp: { capable: true, title: 'Finance Academy', statusBarStyle: 'default' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#faf9f7',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="mx-auto max-w-xl px-4 pb-16">
          <header className="flex items-baseline justify-between border-b border-[var(--border)] py-4">
            <Link href="/" className="text-lg font-semibold tracking-tight text-[var(--accent)]">
              Finance Academy
            </Link>
            <nav className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
              <Link href="/review/">Review</Link>
              <Link href="/practice/">Practice</Link>
              <Link href="/labs/">Labs</Link>
              <Link href="/progress/">Progress</Link>
              <Link href="/glossary/">Glossary</Link>
              <Link href="/settings/">Settings</Link>
            </nav>
          </header>
          <main className="pt-6">{children}</main>
          <footer className="mt-16 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
            Educational only. Not financial advice. No claim about future returns.
          </footer>
        </div>
      </body>
    </html>
  );
}
