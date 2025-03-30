import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

import "./globals.css";

export const metadata = {
  title: 'Form & Function',
  manifest: '/manifest.json',
};

import Image from 'next/image';
import Header from './components/Header';
import QuickStats from './components/QuickStats';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-[100vh]">
        <Header />
        <div id="page-content" className="flex grow flex-col w-[90%] mx-auto text-sm">
          <QuickStats />
          <div className="flex grow items-center justify-center">
            <div className="max-w-1/2">
              <Image src="/document.png" width={467} height={740} alt="Stamp the Document" layout='responsive' />
            </div>
          </div>
        </div>
        <div className="p-8">
          Nav
        </div>
        {children}
      </body>
    </html>
  );
}
