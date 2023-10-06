import { ZoomContextProvider } from '@/shared/context/ZoomContext';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abyss Task Fenin',
  description: 'Created by Fenin Anatolii',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ZoomContextProvider>
      <html lang="en">
        <body className={openSans.className}>{children}</body>
      </html>
    </ZoomContextProvider>
  );
}
