import type { Metadata } from 'next';
import './globals.css';
import { locales } from '@/i18n/config';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: 'MUJ International - International Student Platform',
  description: 'Your comprehensive guide to navigating life as an international student at Manipal University Jaipur. Access campus maps, virtual tours, FAQs, and essential resources.',
  keywords: 'Manipal University Jaipur, international students, campus map, virtual tours, student support, MUJ',
  authors: [{ name: 'MUJ International Team' }],
  generator: 'Next.js',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'MUJ International - International Student Platform',
    description: 'Your comprehensive guide to navigating life as an international student at Manipal University Jaipur',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MUJ International - International Student Platform',
    description: 'Your comprehensive guide to navigating life as an international student at Manipal University Jaipur',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  return (
    <html lang={locale} className="scroll-smooth font-sans">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
