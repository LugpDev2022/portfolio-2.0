import { Inter } from 'next/font/google';

import '../styles/globals.css';
import 'animate.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Luis Alberto Cervantes García',
  description:
    'Welcome to my exceptional website, where you can explore my portfolio, discover the range of services I offer, and gain valuable insights about me.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='bg-[#E1DDBF]'>
      <body className={`${inter.className} mt-[72px]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
