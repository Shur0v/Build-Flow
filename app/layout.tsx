import type { Metadata } from 'next';
import { Inter, Roboto_Slab } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '600'],
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'BuildFlow AI | Construction Intake',
  description: 'Modern AI-enhanced construction project intake and management.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoSlab.variable}`}>
      <body className="bg-[var(--ci-bg)] text-[var(--ci-ink)] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
